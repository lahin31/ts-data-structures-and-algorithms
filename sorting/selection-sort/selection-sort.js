/**
 * Selection Sort - Sorting
 */
var SelectionSort = /** @class */ (function () {
    function SelectionSort() {
        this.marks = [5, 7, 2, 1, 8, 9, 6];
    }
    /**
     * makeSort
     */
    SelectionSort.prototype.makeSort = function () {
        for (var i = 0; i < this.marks.length - 1; i++) {
            var temp = 0;
            for (var j = i + 1; j < this.marks.length; j++) {
                if (this.marks[i] > this.marks[j]) {
                    temp = this.marks[j];
                    this.marks[j] = this.marks[i];
                    this.marks[i] = temp;
                }
            }
        }
        return this.marks;
    };
    return SelectionSort;
}());
var selectionSort = new SelectionSort();
console.log(selectionSort.makeSort());
