/**
 * Linear Search - Searching Algorithm
 * Given an array of integers, we need to find the index of the desired value
 * Time Complexity - O(n) in worst case
 */

class LinearSearch {
    public num: Array<number> = [5, 6, 7, 1, 3, 2];

    /**
     * makeSearch - search method
     */
    public makeSearch(val: number) {
        
        for(let i = 0; i < this.num.length; i++) {
            if(this.num[i] === val) {
                return i; // we got our index
            }
        }

        return -1;
    }
}

let linearSearch = new LinearSearch();
console.log(linearSearch.makeSearch(3)); // 4