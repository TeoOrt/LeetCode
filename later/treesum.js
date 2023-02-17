/*                  PROMPT
Given an integer array nums, return all the triplets [nums[i],
nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/
/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
 */
// SOLUTION GET TWO ARRAYS, ONE FOR NEGATIVE VALUES AND ONE FOR POSITIVE.
// ADD ALL THREE IN PARALLEL AND RETRIVE THE VALUE
var nums = [-1, 0, 1, 2, -1, -4, -2, 4];
function removeDuplicates(arr) {
    return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
}
var threeSum = function (nums) {
    var negative = nums.filter(function (x) { return x <= 0; });
    var positive = nums.filter(function (x) { return x > 0; });
    var temp = [];
    for (var i = 0; i < negative.length; i++) {
        for (var j = 0; j < positive.length; j++) {
            for (var k = 1; k < negative.length; k++) {
                negative[i] + negative[k] + positive[j] === 0
                    ? temp.push([negative[i], negative[k], positive[j]])
                    : null;
            }
        }
        temp[i].sort();
    }
    if (temp[0] == temp[2]) {
        console.log("\n", temp[2], "\n");
    }
    return temp;
};
console.log(threeSum(nums));
//Source: https://stackoverflow.com/questions/43118692
// function sumArrays(...arrays: any) {
//   const n = arrays.reduce((max: any, xs: any) => Math.max(max, xs.length), 0);
//   const result = Array.from({ length: n });
//   return result.map((_, i) =>
//     arrays.map((xs) => xs[i] || 0).reduce((sum, x) => sum + x, 0)
//   );
// }
//last option
/*
        const randomArray = (len: number, max: number) =>
          [...new Array(len)].map(() => Math.round(Math.random() * max * -1));
        let arr: number[] = [];
        */
