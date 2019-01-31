/**
 * Selection Sort - Sorting
 * Given an array of integers, we are sorting them using Selection Sort
 * Time Complexity - O(n^2)
 */
export {}

class SelectionSort {

    public marks: Array<number> = [2, 5, 1, 3, 9, 4];

    /**
     * makrSort - sorting function
     */
    public makrSort(): Array<number> {
        
        for(let i = 0; i < this.marks.length-1; i++) {
            let temp: number, stored_index: number = i;
            for(let j = i + 1; j < this.marks.length; j++) {
                if(this.marks[i] > this.marks[j]) {
                    if(this.marks[j] < this.marks[stored_index]) {
                        stored_index = j;
                    }
                }
            }
            if(stored_index !== i) {
                temp = this.marks[stored_index];
                this.marks[stored_index] = this.marks[i]
                this.marks[i] = temp;
            }
        }
        return this.marks;
    }
}

let selectionSort = new SelectionSort()
console.log(selectionSort.makrSort())