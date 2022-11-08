function sortedSquares(nums: number[]): number[] {
    const EXPONENT:   number   = 2
    const result:     number[] = []
    let first:        number   = 0
    let last:         number   = nums.length - 1

    while (result.length < nums.length) {
        let absoluteFirst = Math.abs(nums[first])
        let absoluteLast  = Math.abs(nums[last])

        if (absoluteFirst < absoluteLast) {
            result.unshift(Math.pow(absoluteLast, EXPONENT))
            last = last - 1
        } else if (absoluteFirst >= absoluteLast) {
            result.unshift(Math.pow(absoluteFirst, EXPONENT))
            first = first + 1
        }
    }
    
    return result
}

/*
 * Runtime: 185 ms, faster than 60.49% of TypeScript online submissions for Squares of a Sorted Array.
 * Memory Usage: 49.3 MB, less than 71.40% of TypeScript online submissions for Squares of a Sorted Array.
 **/
