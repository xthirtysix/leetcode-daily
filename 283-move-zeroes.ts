function moveZeroes(nums: number[]): void {
    let pointer: number = 0
    
    for (let i = 0; i < nums.length; i++) {
        const temp = nums[i]
        nums[i] = 0
        
        if (temp !== 0) {
            nums[pointer] = temp
            pointer++
        }
    }
}

/*
 * Runtime: 117 ms, faster than 84.78% of TypeScript online submissions for Move Zeroes.
 * Memory Usage: 46.8 MB, less than 98.10% of TypeScript online submissions for Move Zeroes.
 **/
