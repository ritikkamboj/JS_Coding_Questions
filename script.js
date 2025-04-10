// we have to find the intersection of two arrays

const x1 = [1, 2, 3, 1];
const x2 = [2, 3, 4, 1];

const intersect = x1.filter((item) => x2.includes(item));
console.log(intersect)

// second solution is to use th set concept , because it makes resuls faster

const setx2 = new Set(x2);
const intersect2 = x1.filter((item) => setx2.has(item));
console.log(intersect2)


// 3rd silution is one liner solution 

const intersect3 = [...new Set(x1)].filter(item => setx2.has(item));
console.log(intersect3)
