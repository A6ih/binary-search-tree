class Node {
  constructor(key) {
    (this.data = key), (this.left = null), (this.right = null);
  }
}

export default class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(this.array);
  }

  buildTree(array) {
    const sortedArray = this.sortArray(array);

    const node = this.createTree(sortedArray, 0, sortedArray.length - 1);

    return node;
  }

  sortArray(array) {
    const sortedArray = [...array];
    sortedArray.sort((a, b) => a - b);

    //remove duplicate elements
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === sortedArray[i + 1]) {
        sortedArray.splice(i + 1, 1);
      }
    }

    return sortedArray;
  }

  createTree(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);

    const node = new Node(array[mid]);
    node.left = this.createTree(array, start, mid - 1);
    node.right = this.createTree(array, mid + 1, end);

    return node;
  }

  // Iterative insert

  //   insert(value) {
  //     if (!this.root) {
  //       return (this.root = new Node(value));
  //     }
  //     let current = this.root;

  //     while (current) {
  //       if (value === current.data) {
  //         return console.log("Value already exist in the tree");
  //       } else if (value < current.data) {
  //         if (current.left === null) {
  //           return (current.left = new Node(value));
  //         } else {
  //           current = current.left;
  //         }
  //       } else {
  //         if (current.right === null) {
  //           return (current.right = new Node(value));
  //         } else {
  //           current = current.right;
  //         }
  //       }
  //     }
  //   }

  insert(value, node = this.root) {
    if (!node) {
      return (node = new Node(value));
    }

    if (value === node.data) {
      return node;
    }

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else {
      node.right = this.insert(value, node.right);
    }

    return node;
  }
}
