//changing the sentence from Kebab case to Camel case

// 1. method  by using map and split()

function camelCase(str) {
    return str.split('-').map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('')
}

console.log(camelCase("hello-sweetie-world"))


// 2. By using reduce method 


function camelCase1(str) {
    return str.split('-').reduce((camel, word, index) => {
        if (index === 0) return word; else {
            return camel + word[0].toUpperCase() + word.slice(1)
        }
    }, "")
}

console.log(camelCase1("hello-sweetie-world"))
