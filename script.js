// SOlutions to make reverse a sentence

// 1. By using split() and join() and one more uhmmm... and reverse()

function revSent(sen) {
    return sen.split(' ').reverse().join(' ');
}
console.log(revSent("Hello My Sweetie"));

// 2nd way is using manual array way ( for interview approach )

function revSent1(sen) {
    let arr = sen.split(' ');
    console.log(arr.length)
    let reverse = ''

    for (let i = arr.length - 1; i >= 0; i--) {
        reverse = reverse + arr[i] + (i > 0 ? " " : "")
    }
    return reverse;
}

console.log(revSent1("Hello My Sweetie"))

// Using the Boss method , the reduce method 


function revSent2(sen) {
    return sen.split(" ").reduce((acc, cur) => cur + ' ' + acc, '').trim();
}

console.log(revSent2("Hello My Sweetie"))


let arr2 = "  jai mata di  ".trim();
console.log(arr2)