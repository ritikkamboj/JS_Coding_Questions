// Below are the methods which i like to solve the question of removing the duplocate elements 

const x = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const x1 = [...new Set(x)];
console.log(x1);

// second method  by using filter and index macyching 

const x2 = x.filter((item, index) => x.indexOf(item) === index);
console.log(x2);


//  using reduce method to remove the duplicate array 

const x3 = x.reduce((acc, cur) => {
    if (!acc.includes(cur))
        acc.push(cur)

    return acc;

}, [])
console.log(x3);