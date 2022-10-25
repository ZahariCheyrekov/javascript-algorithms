/* 
    Problem - Given a number 'n', find the first 'n' elements of the Fibonacci sequence

    In mathematics, the Fibonacci is a sequence in which each number 
    is the sum of the two preceding ones. 

    The first two numbers in the sequence are 0 and 1.

    fibonacci(2) = [0, 1]
    fibonacci(3) = [0, 1, 1]
    fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
*/

function fibonacci(n) {
    const fib = [0, 1];

    for (let index = 2; index < n; index++) { // O(n)
        fib[index] = fib[index - 1] + fib[index - 2];
    }

    return fib;
}

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]