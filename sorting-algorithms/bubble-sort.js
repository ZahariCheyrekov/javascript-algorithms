/*
    Problem - Given an array of integers, sort the array

    // const arr = [-6, 20, 8, -2, 4]
    
    bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]
*/

function bubbleSort(arr) { // O(n^2)
    let isSwapped = false;

    for (let i = 0; i < arr.length; i++) {
        isSwapped = false;

        for (let j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp

                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }

    return arr;
}

console.log(bubbleSort([-6, -2, 4, 8, 20])); 