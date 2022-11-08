function twoSum(numbers: number[], target: number): number[] {
    const map = new Map<number, number>()
        
    for (let i = 1; i <= numbers.length; i++) {
        if (map.has(target - numbers[i - 1])) {
            return [map.get(target - numbers[i - 1]), i]
        } else {
            map.set(numbers[i - 1], i)
        }
    }
}

/*
 * Runtime: 72 ms, faster than 95.65% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
 * Memory Usage: 44.1 MB, less than 31.14% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
 **/

function twoSum(numbers: number[], target: number): number[] {
    let first: number = 0
    let last:  number = numbers.length - 1
    
    while (first < last) {
        if (numbers[first] + numbers[last] > target) last--
        else if (numbers[first] + numbers[last] < target) first++
        else return [first + 1, last + 1]
    }
}

/*
 * Runtime: 119 ms, faster than 49.37% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
 * Memory Usage: 43.2 MB, less than 96.07% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
 **/
