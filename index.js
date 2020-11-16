function is_prime(num){
    if(num < 2) return false;

    let divisors = 0;
    for(let i=1;i<=Math.floor(Math.sqrt(num));i++){
        if((num % i) === 0){
            divisors++;
        }
    }
    return (divisors <= 1);
}

console.log(is_prime(1));
console.log(is_prime(2));
console.log(is_prime(-1));
console.log(is_prime(55));
console.log(is_prime(59));
console.log(is_prime(-5));
console.log(is_prime(5));