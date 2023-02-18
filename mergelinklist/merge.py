# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]: 
        def recursion(list1,list2):
            temp = None
            if list1 is not None and list2 is not None:
                if list1.val <= list2.val:
                    temp = list1
                    temp.next = recursion(list1.next,list2)
                else:
                    temp = list2
                    temp.next = recursion(list2.next,list1)
                return temp
            else:
                if list1 is not None and list2 is None:
                    return list1
                else:
                    return list2
        return recursion(list1,list2)
