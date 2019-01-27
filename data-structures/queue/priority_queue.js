"use strict";
exports.__esModule = true;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.people = [
            { id: 1, name: "Mark" },
            { id: 2, name: "David" }
        ];
    }
    /**
     * addStudent - add people based on their proprity(here priority is id)
     */
    PriorityQueue.prototype.enqueue = function (new_people) {
        var _this = this;
        if (this.people.length === 0) {
            this.people.unshift(new_people);
            return this.people;
        }
        else {
            this.people.map(function (p, i) {
                if (p.id === new_people.id) {
                    _this.people.splice(i, 0, new_people);
                }
            });
            return this.people;
        }
    };
    /**
     * dequeue - delete the first item
     */
    PriorityQueue.prototype.dequeue = function () {
        this.people.shift();
        return this.people;
    };
    /**
     * getLength - returns the length of people array
     */
    PriorityQueue.prototype.getLength = function () {
        return this.people.length;
    };
    return PriorityQueue;
}());
var priority_queue = new PriorityQueue();
console.log(priority_queue.enqueue({ id: 2, name: "Shaun" }));
console.log(priority_queue.dequeue());
console.log(priority_queue.getLength());
