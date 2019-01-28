"use strict";
exports.__esModule = true;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
        this.arr = [10, 25, 20, 40, 45, 15, 10];
    }
    /**
     * makeSort - sorting function
     */
    BubbleSort.prototype.makeSort = function () {
        var temp;
        for (var i = 0; i < this.arr.length; i++) {
            for (var j = i + 1; j < this.arr.length; j++) {
                if (this.arr[i] > this.arr[j]) { // if the value of i'th index is greater than the value of j'th index we swaped the value of both 
                    temp = this.arr[j];
                    this.arr[j] = this.arr[i];
                    this.arr[i] = temp;
                }
            }
        }
        return this.arr;
    };
    return BubbleSort;
}());
var bubbleSort = new BubbleSort();
console.log(bubbleSort.makeSort());
