test:list[int] = [5,5,10,20]

class Solution(object): #aw
    def lemonadeChange(self, bills):
        my_bill = {
            5:0,
            10:0
        }
        for bill in bills:
            if bill == 5:
                 my_bill[5]+= 1
            elif bill == 10:
                if not my_bill[5]: return False
                my_bill[5] -= 1
                my_bill[10] += 1
            else:
                if my_bill[10] and my_bill[5]:
                    my_bill[10]-= 1
                    my_bill[5] -= 1
                elif my_bill[5] >= 3:
                    my_bill[5] -= 3
                else:
                    return False
        return True
Sol = Solution()

print(Sol.lemonadeChange(test))