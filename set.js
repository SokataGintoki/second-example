'use strict';

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];

// const set = new Set(arr);

// console.log(set);

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set = new Set(arr);

set.add('Ivan');
set.add('Oleg');

console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);
// set.forEach((value, valueAgaing, set) =>{
//   console.log(value, valueAgaing);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

function unique(arr) {
    return Array.from(new Set(arr));
}