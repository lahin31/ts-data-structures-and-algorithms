/**
 * Binary Search - Searching Algorithm
 * Given an array of integers, we need to find the index 8
 */
var BinarySearch = /** @class */ (function () {
    function BinarySearch() {
        this.num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
    /**
     * search - returns the index of the searched item
     */
    BinarySearch.prototype.search = function (val) {
        var left = 0, right = this.num.length - 1, mid;
        while (left <= right) {
            mid = (left + right) / 2;
            mid = parseInt(mid);
            if (this.num[mid] === val) { // return the mid as the position of our given value if it matchs to val
                return mid;
            }
            else if (this.num[mid] < val) { // update the left value with mid + 1, if the value of this.num[mid] is lesser than the val
                left = mid + 1;
            }
            else { // update the right value with mid - 1, if the value of this.num[mid] is greater than the val
                right = mid - 1;
            }
        }
        return -1; // return -1 if it couldn't find the index
    };
    return BinarySearch;
}());
var binarySearch = new BinarySearch;
console.log(binarySearch.search(8)); // 7
