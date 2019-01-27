/**
 * Stack - Data Structure
 * Main concept is first in last out
 * In this example below we have an object 
 * We push the value into the last key of the object, like this we pop the value from the last key 
 */
export {}

class Person {

    public storage: object = {}; // making a storage object which will work as a stack
    public key_index: number = 0; //  this will be added as a key

    push(val: any): object { 
        this.storage[this.key_index] = val;
        this.key_index++;
        return this.storage;
    }

    pop(): object { 
        this.key_index-=1;
        delete this.storage[this.key_index]
        return this.storage;
    }

}

let person = new Person();
console.log(person.push("John"));
console.log(person.push(25)); 
console.log(person.push("UK")); 
console.log(person.pop()); // deleting the last item from the object, (uk) will be deleted
console.log(person.pop()); // deleting the last item from the object, (25) will be deleted