"use strict";
exports.__esModule = true;
var SelectionSort = /** @class */ (function () {
    function SelectionSort() {
        this.marks = [2, 5, 1, 3, 9, 4];
    }
    /**
     * makrSort - sorting function
     */
    SelectionSort.prototype.makrSort = function () {
        for (var i = 0; i < this.marks.length - 1; i++) {
            var temp = void 0, stored_index = i;
            for (var j = i + 1; j < this.marks.length; j++) {
                if (this.marks[i] > this.marks[j]) {
                    if (this.marks[j] < this.marks[stored_index]) {
                        stored_index = j;
                    }
                }
            }
            if (stored_index !== i) {
                temp = this.marks[stored_index];
                this.marks[stored_index] = this.marks[i];
                this.marks[i] = temp;
            }
        }
        return this.marks;
    };
    return SelectionSort;
}());
var selectionSort = new SelectionSort();
console.log(selectionSort.makrSort());
