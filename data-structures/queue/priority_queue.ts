/**
 * Queue - Data Structure
 * Main concept is First in First Out
 * We have a students array where we add student into the front 
 * and delete student from the front
 */
export {}
class PriorityQueue {

    people = [
        { id: 1, name: "Mark" },
        { id: 2, name: "David" }
    ];

    /**
     * addStudent - add people based on their proprity(here priority is id)
     */
    public enqueue(new_people) {
        if(this.people.length === 0) {
            this.people.unshift(new_people);
            return this.people;
        } else {
            this.people.map((p, i) => {
                if(p.id === new_people.id) {
                    this.people.splice(i, 0, new_people)
                }
            })
            return this.people;
        }
    }

    /**
     * dequeue - delete the first item
     */
    public dequeue() {
        this.people.shift();
        return this.people;
    }

    /**
     * getLength - returns the length of people array
     */
    public getLength() {
        return this.people.length;
    }
}

let priority_queue = new PriorityQueue();
console.log(priority_queue.enqueue({id: 2, name:"Shaun"}))
console.log(priority_queue.dequeue())
console.log(priority_queue.getLength())