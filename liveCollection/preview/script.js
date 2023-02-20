'use strict';

const boxesQeury = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQeury.forEach(box => {
    if (box.matches('.this')) console.log('This one!');
})

console.log(boxesQeury[0].closest('.wrapper'));
// boxesQeury[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
//     // boxesGet[boxesGet.length] = div;      // напрямую с html коллекцией так работать запрещено
// }

// console.log(boxesQeury);
// console.log(boxesGet);
// // console.log(document.body.children);
