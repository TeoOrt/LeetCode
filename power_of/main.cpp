#include <iostream>
using namespace std;
class Solution
{
public:
    bool isPowerOfTwo(int n)
    {

        if (n % 2 != 0)
        {
            return false;
        }
        int counter = 0;
        int temp = n;
        while (temp > 0)
        {
            if (temp & 1)
            {
                counter++;
            }
            cout << "counter is " << temp << endl;
            temp = temp >> 1;
            if (counter > 1)
            {
                return false;
            }
        }
        if (counter > 1)
            return false;
        return true;
    }
};

int main()
{

    Solution sol;
    bool result = sol.isPowerOfTwo(6);
    cout << "The result of the value is  " << result << endl;
    return 0;
}