/* 
    Problem - Given an integer 'n', find the factorial of that integer.
    
    In mathematics, the factorial of a non-integer 'n',
    denoted n!, is the product of all positive integers less tha or equal to 'n'.

    Factorial of zero is 1.
    n! = n * (n - 1)

    recursiveFactorial(4) = 4 * 3 * 2 * 1 = 24 
    recursiveFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120 
*/

function recursiveFactorial(n) { // O(n)
    if (n <= 2) {
        return n;
    }

    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(5)); // 120