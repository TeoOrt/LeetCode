class TreeNode:
    def __init__(self, val, left, right):
        self.val = val
        self.left = left
        self.right = right



class Solution:
    def isSameTree(self, p, q) -> bool:
        def recur(a):
            if a:
                print(recur(a.left))
                print(recur(a.right)) 
            return False              
        
        return recur(p)

tree_a = TreeNode(0,1,2)
tree_b = TreeNode(0,1,2)
tree_aa = TreeNode(tree_a,3,4)

solution = Solution()

print(solution.isSameTree(tree_a,tree_b))