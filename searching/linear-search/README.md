# Linear Search - Algorithm
Given an array of integers. We need to find the index for a certain value using Linear Search Algorithm.

## Example
Given array: **[5, 6, 7, 1, 3, 2]**, we need to find the index of 3

Steps: 
Start traversing the array,
1. First we got 5 which is not equal to 3. 
2. Then we got 6, which is not equal to 3.
3. We got 7(not equal to 3, move forward).
4. We got 1(not equal to 3, move forward).
5. We got 3(equal to our desired value 3 and the index is 4, so stop).
So after 5 steps we got the index of 3 which is 4.

## Pseudocode
```
from i = 0 to i < array.length
    if the element of array[i] is equal to 3
        return i
```

## Complexity
In worst case scenario the Time Complexity for Linear Search Algorithm is O(n).