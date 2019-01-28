/**
 * Bubble Sort - Sorting
 */
export {}

class BubbleSort {

    readonly arr: Array<number> = [10, 25, 20, 40, 45, 15, 10];

    /**
     * makeSort - sorting function
     */
    public makeSort(): any {

        let temp: number;
        
        for(let i = 0; i < this.arr.length; i++) {
            for(let j = i+1; j < this.arr.length; j++) {
                if(this.arr[i] > this.arr[j]) { // if the value of i'th index is greater than the value of j'th index we swaped the value of both 
                    temp = this.arr[j];
                    this.arr[j] = this.arr[i];
                    this.arr[i] = temp;
                }
            }
        }
        return this.arr;
    }

}

let bubbleSort = new BubbleSort()
console.log(bubbleSort.makeSort()) // [10, 10, 15, 20, 25, 40, 45]
