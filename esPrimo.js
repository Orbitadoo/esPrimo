function esPrimo(num) {
    if (num <= 1) {
        return false
    } 
    for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
    }
    return true
}

console.log(esPrimo(1))
console.log(esPrimo(2))
console.log(esPrimo(3))
console.log(esPrimo(4))
console.log(esPrimo(5))
console.log(esPrimo(6))
console.log(esPrimo(7))

