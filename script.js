

function modify(arr) {

    let obj = {};

    let sorted = arr.map((item) => item.split('').sort().join(''))

    for (let item of sorted) {
        if (!obj[item]) {
            obj[item] = [];
        }

        obj[item].push(item);
    }

    // console.log(sorted)
    console.log(obj)

    console.log(Object.values(obj))
}

modify(["eat", "tea", "tan", "ate", "nat", "bat"]);
