/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

const mergeTrees = (node1, node2) => {
  const { right: right1, left: left1, val: valN2 } = node1 || {};
  const { right: right2, left: left2, val: valN1 } = node2 || {};

  const val1 = valN1 === 0 ? valN1.toString() : valN1;
  const val2 = valN2 === 0 ? valN2.toString() : valN2;

  if (!val1 && !val2) return null;

  // eslint-disable-next-line no-undef
  const treeNode = new TreeNode();

  if (val1 && val2) {
    treeNode.val = parseInt(val1, 10) + parseInt(val2, 10);
  } else if (val1) {
    treeNode.val = parseInt(val1, 10);
  } else {
    treeNode.val = parseInt(val2, 10);
  }

  // Merge Right Nodes
  // eslint-disable-next-line no-use-before-define
  const rightNodes = traverseNode(right1, right2);

  // Merge left Nodes
  // eslint-disable-next-line no-use-before-define
  const leftNodes = traverseNode(left1, left2);

  treeNode.right = rightNodes;
  treeNode.left = leftNodes;

  return treeNode;
};

const traverseNode = (node1, node2) => {
  let node;
  if (node1 !== null || node2 !== null) {
    let currentLeft1;
    let currentLeft2;

    if (node1 !== null) {
      currentLeft1 = node1;
    }
    if (node2 !== null) {
      currentLeft2 = node2;
    }

    if (currentLeft1 || currentLeft2) {
      node = mergeTrees(currentLeft1, currentLeft2);
    }
  }
  return node || null;
};
