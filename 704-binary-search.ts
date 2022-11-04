function search(nums: number[], target: number): number {
    let left:   number = 0
    let right:  number = nums.length - 1
    let mid:    number
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        
        if (nums[mid] < target) left = mid + 1
        else if (nums[mid] > target) right = mid - 1
        else return mid
    }
    
    return -1
}

/**
 * Runtime: 60 ms, faster than 99.32% of TypeScript online submissions for Binary Search.
 * Memory Usage: 46.1 MB, less than 44.11% of TypeScript online submissions for Binary Search.
 */

