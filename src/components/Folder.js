import { useState } from "react";

function Folder({ handleInsertNode, handleDeleteNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });

  const AddFileOrFolder = (e, isFolder) => {
    setExpand(true);
    e.stopPropagation();

    setShowInput({
      visible: true,
      isFolder: isFolder
    });
  };
  const DeleteFileOrFolder = (e, isFolder) => {
    setExpand(true);
    handleDeleteNode(explorer.id, explorer.name);
    e.stopPropagation();

    setShowInput({
      visible: true,
      isFolder: isFolder
    });
  };

  const onchangeFn = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="Folder" onClick={() => setExpand(!expand)}>
          <span>
            {"📁"}
            {explorer.name}
          </span>
          <button onClick={(e) => AddFileOrFolder(e, true)}>Add Folder+</button>
          <button onClick={(e) => AddFileOrFolder(e, false)}>Add File+</button>
          <button onClick={(e) => DeleteFileOrFolder(e, true)}>Delete -</button>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "🗒️"}</span>
              <input
                className="inputContainer__input"
                autoFocus
                type="text"
                onBlur={() => {
                  setShowInput({ ...showInput, visible: false });
                }}
                onKeyDown={onchangeFn}
              ></input>
            </div>
          )}
          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                explorer={exp}
                key={exp.id ? exp.id : new Date().getMilliseconds()}
              />
            );
          })}
        </div>
      </div>
    );
  } else if (explorer.isFolder === false) {
    return (
      <div>
        <span>
          {"🗒️"} {explorer.name}
        </span>
        <button onClick={(e) => DeleteFileOrFolder(e, false)}>Delete -</button>
      </div>
    );
  }
}
export default Folder;
