/**
 * Linear Search - Searching Algorithm
 * Given an array of integers, we need to find the index of the desired value
 * Time Complexity - O(n) in worst case
 */
var LinearSearch = /** @class */ (function () {
    function LinearSearch() {
        this.num = [5, 6, 7, 1, 3, 2];
    }
    /**
     * makeSearch - search method
     */
    LinearSearch.prototype.makeSearch = function (val) {
        for (var i = 0; i < this.num.length; i++) {
            if (this.num[i] === val) {
                return i; // we got our index
            }
        }
        return -1;
    };
    return LinearSearch;
}());
var linearSearch = new LinearSearch();
console.log(linearSearch.makeSearch(3)); // 4
