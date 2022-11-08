function rotate(nums: number[], k: number): void {
    k = k % nums.length
    
    swap(nums, 0, nums.length - 1 - k)
    swap(nums, nums.length - k, nums.length - 1)
    swap(nums, 0, nums.length - 1)
}

function swap(nums: number[], first: number, last: number) {
    while (first < last) {
        const initialFirst = nums[first]
        nums[first] = nums[last]
        nums[last] = initialFirst
        first++
        last--
    }
}

/*
 * Runtime: 185 ms, faster than 73.80% of TypeScript online submissions for Rotate Array.
 * Memory Usage: 49.3 MB, less than 99.04% of TypeScript online submissions for Rotate Array.
 **/
