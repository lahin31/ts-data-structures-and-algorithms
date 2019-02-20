"use strict";
/**
 * Set - Data Structure
 * An array like data structure, useful to get unique values
 */
exports.__esModule = true;
var Set = /** @class */ (function () {
    function Set() {
        this.users = []; // this will hold every value as a set
    }
    /**
     * has - check the value exist in the array or not
     */
    Set.prototype.has = function (val) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user === val) {
                return true;
            }
        }
        return false;
    };
    /**
     * add - will add into the set
     */
    Set.prototype.add = function (user) {
        if (!this.has(user)) {
            this.users.push(user);
        }
    };
    /**
     * delete - delete a user from the users set
     */
    Set.prototype["delete"] = function (user) {
        var index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    };
    /**
     * size - returns the size of the array
     */
    Set.prototype.size = function () {
        return this.users.length;
    };
    /**
     * getUsers - returns the users array
     */
    Set.prototype.getUsers = function () {
        return this.users;
    };
    /**
    * union - returns union between users set and another set
    */
    Set.prototype.union = function (newSet) {
        var unionSet = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var elem = _a[_i];
            unionSet.push(elem);
        }
        for (var _b = 0, newSet_1 = newSet; _b < newSet_1.length; _b++) {
            var val = newSet_1[_b];
            unionSet.push(val);
        }
        return unionSet;
    };
    /**
     * intersection - intersection between users set and another
     */
    Set.prototype.intersection = function (newSet) {
        var intersectedSet = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var elem = _a[_i];
            if (newSet.includes(elem)) {
                intersectedSet.push(elem);
            }
        }
        return intersectedSet;
    };
    return Set;
}());
var set = new Set();
set.add("Mark");
set.add("David");
set.add("Mark");
set.add("David");
console.log(set.getUsers()); // [ 'Mark', 'David' ]
console.log(set.size()); // 2
set["delete"]("Mark");
console.log(set.getUsers()); // [ 'David' ]
console.log(set.union(["Dan", "Rob"])); // [ 'David', 'Dan', 'Rob' ]
console.log(set.intersection(["Dan", "David"])); // [ 'David' ]
