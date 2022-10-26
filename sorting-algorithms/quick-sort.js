/*
    Problem - Given an array of integers, sort the array

    const arr = [8, 20, -2, 4, -6]

    quickSort(arr) => Should return [-6, -2, 4, 8, 20]
*/

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Worst case - O(n^2) 
// Average case - O(n log n)


console.log(quickSort([8, 20, -2, 4, -6])); // [-6, -2, 4, 8, 20]
