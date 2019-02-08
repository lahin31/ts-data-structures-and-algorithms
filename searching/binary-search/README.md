# Binary Search - Algorithm
Given an array of integers. We need to find the index for a certain value using Binary Search Algorithm.

## Example
Given array: **[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]**, we need to find the index of 8.

Steps:
In every steps we need to update three variable middle, left and right. Initially middle will be (left + right) / 2, left will be 0 and right will be (arr.length - 1)
1. First the value of middle will be (0 + 13) / 2 = 6, so the value of 6th index is 7 which is less than 8, so let's change our equation to the step 2.
2. In this step we need to update the value of left from 0 to (middle + 1), so now the value of left is (6 + 1) = 7, again find the, middle = (7 + 13) / 2 now middle is 10. The value of 10th index is 11, which is greater than 8(desired value). 
3. As 11 is greater than 8, we need to update the value of right, right = (middle - 1), right = (10 - 1) = 9. So now the middle will be (7 + 9) / 2 = 8. The value of 8th index is 9, which is greater than 8(desired value).
4. As 9 is greater than 8, again we need to update the value of right, right = (8 - 1) = 7. So now the middle will be (7 + 7) / 2 = 7. Now the value of 7th index is our desired 8. So 7 is our index where we find 8.

## Pseudocode
```
start a loop until the left <= right  is true
    mid = (left + right) / 2;
    if the value of arr[mid] is equal to the desired value
        return mid
    if the value of arr[mid] is less than the desired value
        left = mid + 1;
    else 
        right = mid - 1;
```