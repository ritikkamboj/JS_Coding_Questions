// quetion to move all the zeroes at the end 
// approach  : firstly we filter the non zero elemnts and then later we add the zeo elements in the last 


function settle(arr) {

    let arr1 = []
    let nonzero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr1[nonzero] = arr[i];
            nonzero++;
        }
    }

    while (nonzero < arr.length) {
        arr1[nonzero] = 0
        nonzero++
    }
    return arr1
}

let z = settle([1, 0, 4, 0, 2, 3, 0]);
console.log(z);


// one more way of solution to solve the same problem 


function settle1(arr) {
    let nonzeroes = arr.filter((item) => item !== 0);
    let zeroes = arr.filter((item) => item === 0)

    return nonzeroes.concat(zeroes)
}

const newArr = settle1([1, 0, 4, 0, 2, 3, 0]);
console.log(newArr)