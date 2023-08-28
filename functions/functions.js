// function hi(name){
//     console.log(`Hi, ${name}`);
// }

// hi('Denis');


// const sayHello = (name) => {
//     console.log("hello " + name);
//     }
//     sayHello('Denis');

// const addition = function(a, b) {
//     return a + b;
// }

// console.log(`${addition(20 , 3)}`);

function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
        }
}
console.log(`${factorial(5)}`);
