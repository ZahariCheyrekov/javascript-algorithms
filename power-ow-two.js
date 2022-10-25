/* 
    Problem - Given a positive integer 'n', determin if the number is a power of 2 or not

    An integer is a power of two if there exists an integer 'x' such that 'n' === 2x.

    isPowerOfTwo(1) = true (2°)
    isPowerOfTwo(2) = true (2¹)
    isPowerOfTwo(5) = false
*/

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0; // O(1)
}

function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) { // O(log n)
        if (n % 2 !== 0) {
            return false;
        }
        n /= 2;
    }

    return true;
}

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false