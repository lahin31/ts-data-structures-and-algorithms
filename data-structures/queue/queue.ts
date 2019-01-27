/**
 * Queue - Data Structure
 * Main concept is First in First Out
 * We have a students array where we add student into the front 
 * and delete student from the front
 */
export {} 
class Queue {

    public students: Array<string> = ["Mark", "John", "Michael"];

    /**
     * addStudent - add element/'s to the front
     */
    public enqueue(new_student) {
        this.students.unshift(new_student);
        return this.students;
    }

    /**
     * dequeue - delete the first item
     */
    public dequeue() {
        this.students.shift();
        return this.students;
    }

    /**
     * getLength - returns the length of the students array
     */
    public getLength() {
        return this.students.length;
    }
}

let queue = new Queue();
console.log(queue.enqueue("Shaun")) // ['Shaun', 'Mark', 'John', 'Michael']
console.log(queue.dequeue()) // ['Mark', 'John', 'Michael']
console.log(queue.getLength())// 3