'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    Birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (const key in user) {
    console.log(user[key]);
}
const arr = ['b', 'a', 'c'];

for (const key in arr) {
    console.log(arr[key]);
}

const str = 'string';

for (const key in str) {
    console.log(str[key]);
}

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function(){
        console.log('Hello');
    }
}

salaries[Symbol.iterator] = function () {
    return {
        current: this.john,
        last: this.ann,


        next () {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }


            // {done: true, value: 123}
        }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }