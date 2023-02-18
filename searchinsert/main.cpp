#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

class Solution
{
public:
    int searchInsert(vector<int> &nums, int target)
    {
        int left = 0;
        int right = nums.size() - 1;
        int middle;
        while (left <= right)
        {
            middle = floor((left + right) / 2);
            nums[middle] < target ? left = middle + 1 : right = middle - 1;
        }
        if (nums[middle] == target)
        {
            return middle;
        }
        else
        {
            return nums[middle] > target ? middle : middle + 1;
        }
        // we are   doing binary search for this problem since worst case scenario is o log n
    }
};

int main()
{

    Solution sol;
    vector<int> nums;

    for (int i = 1; i < 5; i++)
    {
        if (i == 1)
        {
            nums.push_back(i);
        }
        else
        {
            nums.push_back(i * 2 + 1);
        }
    }

    for (int j = 0; j < 4; j++)
    {
        cout << nums[j] << endl;
    }
    int expected = 1;

    cout << "the solution of the problem should be "
         << expected << " actual solution " << sol.searchInsert(nums, 6 ) << endl;

    return 0;
}