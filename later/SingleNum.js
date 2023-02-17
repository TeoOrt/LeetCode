/*              PROMT

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

*/
var singleNumber = function (nums) {
    console.log(nums.sort());
    var arr = nums.sort().reduce(function (prev, current) { return prev + current; }, 0);
    return 0;
};
var test = [5, 1, 1, 2, 2, 2, 2, 2];
console.log(singleNumber(test));
