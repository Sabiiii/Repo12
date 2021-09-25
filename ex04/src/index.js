function sumFibonacci(num) {

    if (num <= 1) {
        return num;
    } else {
        return sumFibonacci(num - 1) + sumFibonacci(num - 2);
    }
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;

