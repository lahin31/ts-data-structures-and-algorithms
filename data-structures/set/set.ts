/**
 * Set - Data Structure
 * An array like data structure, useful to get unique values
 */

export {} 

class Set {

  public users: Array<string> = [] // this will hold every value as a set

  /**
   * has - check the value exist in the array or not
   */
  public has(val: string) {
    for(let user of this.users) {
      if(user === val) {
        return true
      }
    }
    return false;
  }

  /**
   * add - will add into the set
   */
  public add(user: string) {
    if(!this.has(user)) {
      this.users.push(user)
    }
  }

  /**
   * delete - delete a user from the users set
   */
  public delete(user: string) {
    let index = this.users.indexOf(user);
    if(index >= 0) {
      this.users.splice(index, 1);
    }
  }

  /**
   * size - returns the size of the array
   */
  public size() {
    return this.users.length;
  }

  /**
   * getUsers - returns the users array
   */
  public getUsers() {
    return this.users;
  }

   /**
   * union - returns union between users set and another set
   */
  public union(newSet: Array<string>) {
    let unionSet: Array<string> = [];
    for(let elem of this.users) {
      unionSet.push(elem)
    }
    for(let val of newSet) {
      unionSet.push(val)
    }
    return unionSet;
  }

  /**
   * intersection - intersection between users set and another
   */
  public intersection(newSet: Array<string>) {
    let intersectedSet: Array<string> = []
    for(let elem of this.users) {
      if(newSet.includes(elem)) {
        intersectedSet.push(elem)
      }
    }
    return intersectedSet
  }
}

let set = new Set()
set.add("Mark")
set.add("David")
set.add("Mark")
set.add("David")
console.log(set.getUsers()) // [ 'Mark', 'David' ]
console.log(set.size()) // 2
set.delete("Mark")
console.log(set.getUsers()) // [ 'David' ]
console.log(set.union(["Dan", "Rob"])) // [ 'David', 'Dan', 'Rob' ]
console.log(set.intersection(["Dan", "David"])) // [ 'David' ]