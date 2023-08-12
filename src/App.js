import "./styles.css";
import explorer from "./FolderData/FolderData";
import Folder from "./components/Folder";
import useUpdateNode from "./hooks/useUpdateNode";
import { useState } from "react";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode } = useUpdateNode();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  const handleDeleteNode = (folderId, item) => {
    const finalTree = deleteNode(explorerData, folderId, item);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        explorer={explorerData}
      />
    </div>
  );
}
