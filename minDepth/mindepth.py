# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# [3,9,20,null,null,15,7]
class Solution:
    def minDepth(self, root) -> int:
        def recursion(node):
            if  not node:
                return 0
            elif node.left == 0:
                return 1 + recursion(node.right)
            else:
                return 1 + recursion(node.left)
        return recursion(root)

Tree = TreeNode(20,15,7)
Tre = TreeNode(3,9,Tree)

Sol =Solution()

print(Sol.minDepth(Tre))