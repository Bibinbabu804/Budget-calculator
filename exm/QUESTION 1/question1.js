//check a javascript function to check the given number is prime

function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true; 


    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 2; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}


console.log(isPrime(7)); 
console.log(isPrime(9)); 