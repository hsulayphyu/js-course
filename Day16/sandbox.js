//find method
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50);
console.log(firstHighScore);

//example-1 sorting strings
const names= ['luffy','zoro','sanji','nami','usopp'];

names.sort();
names.reverse();
console.log(names);

//example-2 sorting numbers
const power = [10,50,20,5,35,70,45];

// power.sort();
// power.reverse();
// console.log(power);

power.sort((a,b) => b-a);
console.log(power);

//example-3 sorting objects
const players = [
    {name: 'luffy', score: 20},
    {name: 'zoro', score: 10},
    {name: 'sanji', score: 50},
    {name: 'nami', score: 30},
    {name: 'usopp', score: 70}
];

// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     }else if(b.score > a.score){
//         return 1;
//     }else {
//         return 0;
//     }
// });

players.sort((a,b) => b.score - a. score);

console.log(players);

//chaining method

const products =[
    {name: 'gold star', price:5},
    {name: 'mushroom', price:40},
    {name: 'green shells', price:30},
    {name: 'banana skin', price:10},
    {name: 'red shells', price:50}
];

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price /2} pounds`;
// });

const promos = products
.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price /2} pounds`);

console.log(promos);