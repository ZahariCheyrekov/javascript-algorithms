/*
    Problem - Given two finite non-empty sets, find their Cartesian Product.
    
    In mathematics, specifically set theory, the Cartesian product of two 
    sets A and B, denoted AxB, is set of all ordered pairs (a,b) where a 
    is in A and b is in B.

    const A = [1, 2]
    const B = [3, 4]
    AxB = [[1, 3], [1, 4], [2, 3], [2, 4]]

    const C =[1, 2]
    const D = [3, 4, 5]
    CxD = [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]
*/

function cartesianProduct(firstArr, secondArr) {
    const result = [];

    for (let i = 0; i < firstArr.length; i++) {
        for (j = 0; j < secondArr.length; j++) {
            result.push([firstArr[i], secondArr[j]])
        }
    }

    return result;
}

// Big O(mn)

const firstArr = [1, 2];
const secondArr = [3, 4];
console.log(cartesianProduct(firstArr, secondArr));
// [[1, 3], [1, 4], [2, 3], [2, 4]]

const firstArray = [1, 2];
const secondArray = [3, 4, 5];
console.log(cartesianProduct(firstArray, secondArray));
// [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]