// Ways to reversing the string 

// 1. using helping function way 

let x = 'Hello';

let y = x.split('').reverse().join('');
console.log(y)

// 2 . using array way 

function strReverse(arr) {
    let rverse = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        rverse = rverse + arr[i]
    }

    return rverse;

}

// strReverse('ritik')
console.log(strReverse('ritik'))

// 3. The Hukum ka Ikka is using reduce way 

let reverse = 'ritik'.split('').reduce((acc, cur) => cur + acc, "");
console.log(reverse)

console.log('ritik'[0]);