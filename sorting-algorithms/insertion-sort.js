/*
    Problem - Given an array of integers, sort the array

    const arr = 

    insertionSort => Should return [-6, -2, 4. 8, 20]
*/

function insertionSort(arr) { // O(n^2)
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }

    return arr;
}

console.log(insertionSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]