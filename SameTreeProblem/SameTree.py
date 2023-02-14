# Given the roots of two binary trees p and q, write a function to check if they are the same or not .
# Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSameTree(self, p, q) -> bool:
        return False if p.val != q.val else True


TreeTestOne = TreeNode(1, 2, 3)
BigNode = TreeNode(TreeTestOne, 0, -1)
i = 50


def Mateo(TreeNode):
    while BigNode.val != None:
        print(BigNode.val, BigNode.left, BigNode.right)
        BigNode.val -> BigNode.left
        return BigNode.val * Mateo(BigNode.val=BigNode.left)


Mateo(BigNode)
