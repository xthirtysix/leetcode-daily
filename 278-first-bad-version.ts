var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let first:  number = 0
        let last:   number = n
        let mid:    number
        
        while(first <= last) {
            mid = Math.floor((first + last) / 2)
            /*
             * if bad value in the middle is bad
             * than decrease aread of search from first version
             * to mid - 1 version
             */
            if (isBadVersion(mid)) last = mid - 1
            /*
             * if bad value in the middle is not bad
             * than decrease aread of search from mid + 1 version 
             * to last version
             */
            else first = mid + 1
        }
        
        return first
    };
}

/*
 * Runtime: 92 ms, faster than 74.26% of TypeScript online submissions for First Bad Version.
 * Memory Usage: 42.7 MB, less than 65.83% of TypeScript online submissions for First Bad Version.
 **/
