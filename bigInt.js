'use strict';

console.log(Number.MAX_SAFE_INTEGER)

// const bigint = 12131321421413554336366666n;

const sameBigint = BigInt(12131321421413554336366666);

// console.log(typeof(bigint));

console.log(5n / 2n);

let bigint =  1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);