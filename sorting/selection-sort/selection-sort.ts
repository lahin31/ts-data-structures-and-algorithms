/**
 * Selection Sort - Sorting
 * We will check each value of index is greater then the immediate one 
 * if yes, then we replace the index of both of them
 */

class SelectionSort {
    readonly marks: Array<number> = [5, 7, 2, 1, 8, 9, 6];

    /**
     * makeSort - making the sort
     */
    public makeSort(): Array<number> {

        for( let i = 0; i < this.marks.length-1; i++ ) {
            let temp: number = 0;
            for(let j = i+1; j < this.marks.length; j++ ) {
                if(this.marks[i] > this.marks[j]) {
                    temp = this.marks[j];
                    this.marks[j] = this.marks[i];
                    this.marks[i] = temp;
                }
            }
        }
        return this.marks;
    }
}

let selectionSort = new SelectionSort();
console.log(selectionSort.makeSort()); // [1, 2, 5, 6, 7, 8, 9]