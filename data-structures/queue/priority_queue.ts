/**
 * Priority Queue - Data Structure
 * We have a people array where we add more people based on their priority
 * and delete people from the front
 */
export {}
class PriorityQueue {

    private people: Array<any> = [
        { id: 1, name: "Mark" },
        { id: 2, name: "David" }
    ];

    /**
     * enqueue - add people based on their proprity(here priority is id)
     */
    public enqueue(new_people: any) {
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
console.log(priority_queue.enqueue({id: 2, name:"Shaun"})) // [ { id: 1, name: 'Mark' },{ id: 2, name: 'Shaun' },{ id: 2, name: 'David' } ]
console.log(priority_queue.dequeue()) // [ { id: 2, name: 'Shaun' }, { id: 2, name: 'David' } ]
console.log(priority_queue.getLength()) // 2