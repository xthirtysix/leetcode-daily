function searchInsert(nums: number[], target: number): number {
    let first:  number  = 0
    let last:   number  = nums.length - 1
    let middle: number
    
    while (first <= last) {
        middle = Math.floor((first + last) / 2)
        
        if (target < nums[first]) {
          return 0
        } else if (target > nums[last]) {
          return last + 1
        } else if (nums[middle] === target ||
          ( target < nums[middle] && target > nums[middle - 1])) {
          return middle
        } else if (target > nums[middle] && target < nums[middle + 1]) {
          return middle + 1
        } else if (target < nums[middle]) {
            last = middle - 1
        } else if (target > nums[middle]) {
            first = middle + 1
        }
    }
};

/*
 * Runtime: 110 ms, faster than 42.51% of TypeScript online submissions for Search Insert Position.
 * Memory Usage: 43.8 MB, less than 95.03% of TypeScript online submissions for Search Insert Position.
 **/

