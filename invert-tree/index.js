function invertTree(root) {
  // recursively invert branches as long as we have root, and a left or right value
  if (root && (root.left || root.right)) {
    let invertedLeft = invertTree(root.right);
    let invertedRight = invertTree(root.left);
    root.left = invertedLeft;
    root.right = invertedRight;
  }
  return root;
}

module.exports = invertTree;
