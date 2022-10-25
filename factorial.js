/* 
    Problem - Give an integer 'n', find the factorial of that integer.
    
    In mathematics, the factorial of a non-integer 'n',
    denoted n!, is the product of all positive integers less tha or equal to 'n'.

    Factorial of zero is 1.

    factorial(4) = 4 * 3 * 2 * 1 = 24 
    factorial(5) = 5 * 4 * 3 * 2 * 1 = 120 
*/

function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) { // O(n)
        result *= i;
    }

    return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120