import Tree from "./binarySearchTree.js";

const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

test.insert(100);
test.insert(99);
test.insert(2);
test.insert(1);
test.delete(1);
test.delete(2);

function log(value) {
  console.log(value);
}

prettyPrint(test.root);
//test.levelOrder(log);
// test.inOrder(log);
// test.preOrder(log);
// test.postOrder(log);
console.log(test.height(8));
console.log(test.depth(67));
