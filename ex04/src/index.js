function sumFibonacci(num) {

    if (num <= 1) {
        return num;
    } else {
        return sumFibonacci(num - 1) + sumFibonacci(num - 2);
    }

}


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(23));
console.log(sumFibonacci(5));
console.log(sumFibonacci(0));
module.exports = sumFibonacci;
