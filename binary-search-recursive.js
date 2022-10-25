/*
    Problem - Given a sorted array of 'n' elements and a target element 't',
    find the index of 't' in the array. Return -1 if the target element is not found.

    arr = [-5, 2, 4, 6, 10], t = 10  ==> Should return 4
    arr = [-5, 2, 4, 6, 10], t = 6  ==> Should return 3
    arr = [-5, 2, 4, 6, 10], t = 20  ==> Should return -1
*/

function binarySearchRecursive(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) { // O(log n)
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex;
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 6));  // 3
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 20)); // -1