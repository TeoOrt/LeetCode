/*              PROMT

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

*/

import { NumericLiteral } from "typescript";

const singleNumber = (nums: number[]): number => {
  nums = nums.sort();
  let finalArr: any = [];
  let i: number = nums.length - 1;
  while (i != 0) {
    finalArr.push((num :number) => {
      if(nums[i] == nums[i-1]) 
    });
    i--;
  }

  return 0;
};

const test = [5, 1, 1, 2, 2, 2, 2, 2];

console.log(singleNumber(test));

//how to see how many times an integer appears in an arr
