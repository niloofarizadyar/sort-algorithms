class TreeNode {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function treeSort(arr) {
    function insert(root, key) {
      if (root === null) {
        return new TreeNode(key);
      }
  
      if (key < root.value) {
        root.left = insert(root.left, key);
      } else if (key > root.value) {
        root.right = insert(root.right, key);
      }
  
      return root;
    }
  
    function inOrderTraversal(root, sortedArray) {
      if (root !== null) {
        inOrderTraversal(root.left, sortedArray);
        sortedArray.push(root.value);
        inOrderTraversal(root.right, sortedArray);
      }
    }
  
    let root = null;
    for (const num of arr) {
      root = insert(root, num);
    }
  
    const sortedArray = [];
    inOrderTraversal(root, sortedArray);
  
    return sortedArray;
  }