// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// Custom Judge:
// The judge will test your solution with the following code:
var numbers = [1, 1, 2, 2, 3, 3, 6, 4, 6, 6, 3];
// 2, nums = [1,2,_]
var removeDuplicate = function (nums) {
    return nums
        .map(function (val, idx, arr) { return (val === arr[idx + 1] ? (val = 0) : (val = val)); })
        .filter(function (x) { return x !== 0; }).length;
};
console.log(removeDuplicate(numbers.sort()));
