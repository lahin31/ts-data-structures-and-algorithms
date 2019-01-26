"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
        this.storage = {}; // making a storage object which will work as a stack
        this.key_index = 0; //  this will be added as a key
    }
    Person.prototype.push = function (val) {
        this.storage[this.key_index] = val;
        this.key_index++;
        return this.storage;
    };
    Person.prototype.pop = function () {
        this.key_index -= 1;
        delete this.storage[this.key_index];
        return this.storage;
    };
    return Person;
}());
var person = new Person();
console.log(person.push("John"));
console.log(person.push(25));
console.log(person.push("UK"));
console.log(person.pop()); // deleting the last item from the object, (uk) will be deleted
console.log(person.pop()); // deleting the last item from the object, (25) will be deleted
