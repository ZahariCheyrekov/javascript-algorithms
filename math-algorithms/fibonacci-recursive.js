/* 
    Problem - Given a number 'n', find the nth element of the Fibonacci sequence

    In mathematics, the Fibonacci sequence is a sequence in wich each number is the 
    sum of the two preceding ones.

    The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5, 8...)

    recursiveFibonacci(0) = 0
    recursiveFibonacci(1) = 1
    recursiveFibonacci(6) = 8
*/

// Iteration is better for this problem
function recursiveFibonacci(n) { // O(2^n)
    if (n < 2) {
        return n;
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8