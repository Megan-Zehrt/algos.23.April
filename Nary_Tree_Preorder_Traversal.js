// 589. N-ary Tree Preorder Traversal

// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value





var preorder = function(root) {
    
    let result = []

    function dfs(node, result){

        if(node === null){
            return null
        }

        result.push(node.val)

        for(child of node.children){
            dfs(child, result)
        }
    }

    dfs(root, result)
    return result
};