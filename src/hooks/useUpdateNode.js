const useUpdateNode = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getMilliseconds(),
        name: item,
        isFolder,
        items: []
      });
      return tree;
    } else {
      let finalTree = [];
      if (tree.items && tree.items.length) {
        finalTree = tree.items.map((ob) => {
          return insertNode(ob, folderId, item, isFolder);
        });
      }
      return { ...tree, items: finalTree };
    }
  }
  const deleteNode = (tree, itemId, item) => {
    if (tree.id === itemId) {
      tree = {};
      return tree;
    } else {
      let finalTree = [];
      if (tree.items && tree.items.length) {
        finalTree = tree.items.map((ob) => {
          return deleteNode(ob, itemId, item);
        });
      }
      return { ...tree, items: finalTree };
    }
  };

  return { insertNode, deleteNode };
};
export default useUpdateNode;
