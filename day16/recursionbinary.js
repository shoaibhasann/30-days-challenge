// T9
/*
first we create node of binary tree using class which contain three things current
node value, left subtree & right subtree
*/

class treeNode{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(rootNode, result = []){
    if(rootNode == null) return;

    // visit the left subtree
    inOrderTraversal(rootNode.left, result);

    // visit the current node
    result.push(rootNode.value);

    // visit the right subtree
    inOrderTraversal(rootNode.right, result);

    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = inorderTraversal(root);
console.log(result); // Output: [4, 2, 5, 1, 3]

// T9
function treeDepth(rootNode){

    // base case
    if(rootNode == null) return 0;

    // assumptions
    let leftDepth = treeDepth(rootNode.left);
    let rightDepth = treeDepth(rootNode.right);

    /*
    max depth of tree is maximum of depth of left and right subtree and add plus one
    for root node or current node.
    */
    return Math.max(leftDepth, rightDepth) + 1;

}