// program to capitalize the first letter of the each word in the sentence 


function capitalize(arr) {

    let x = (arr.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' '))
    // console.log(arr)
    console.log(x)
}



let arg = "hello cutie gpt"
capitalize(arg)


// 2nd way by using regex way 

function capitalize1(arr) {
    let x = arr.replace('/\b\w/g', (char) => char.toUpperCase())
    return x;

}

capitalize(arg);