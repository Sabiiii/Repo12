
function myCounter(n) {

    if (n < 1 ) {
        return []
    }
    if (n === 1) {

        return 1; } else {

        const output =[n];
        return output.concat(myCounter(n - 1));
    } 

    }

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;

