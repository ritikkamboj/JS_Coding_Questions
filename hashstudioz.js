// // practicing promise in js 

// // writing the simplest promise 

// const myPromise = new Promise((resolve, reject) => {

//     let sucess = false;
//     if (sucess)
//         resolve("ban jaegi baat ")
//     else
//         reject("not resolved ")
// })

// // myPromise.then((data) => console.log(data)).catch((err) => console.log(err))


// // by using a function 


// function fetchData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (data)
//                 resolve("data fecthed sucessfully")
//             else
//                 reject("data is not fetched ")

//         }, 5000)
//     })
// }

// // fetchData(true).then((data) => console.log(data)).catch((data) => console.log(data))


// // to solve the calll back issue we have to use make the function indivisually use 


function task1() {
    return new Promise((resolve) => setTimeout(() => resolve("task1 is done here"), 1000));
}

// task1().then((data) => console.log(data));

function task2() {
    return new Promise((resolve) => setTimeout(() => resolve("task2 is done"), 1000));

}

function taks3() {
    return new Promise((resolve) => setTimeout(() => resolve("task3 us doe "), 1000))
}


// task1().then((data) => {
//     console.log(data)
//     return task2();
// }).then((data2) => {
//     console.log(data2)
//     return taks3();
// }).then((data3) => {
//     console.log(data3)
// })

// getting data from above functon by using async and await 


async function getData() {
    const data1 = await task1();
    console.log(data1);

    const data2 = await task2();
    console.log(data2)

    const data3 = await taks3();
    console.log(data3)


    console.log("all tasks are done successfully ")
}

// getData();


// example to show the error in async await error handling 

async function fetchData2() {
    try {
        const data1 = await task1();
        console.log(data1)

        throw new Error("something went wrong here ")

        const data2 = await task2();
        console.log(data2)
    }
    catch (err) {
        console.log("err is :", err.message)
    }

}

// fetchData2();


// real life example to use the promise and async and await 

function getUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1)
                resolve({ id: 1, name: "ritik" })
            else {
                reject("something went wrong ")
            }
        }, 1000)



    })
}

getUserData(1).then((data) => console.log(data)).catch((err) => console.log(err))


// using the same above functon with async and await approach 


async function gettingData(id) {

    try {

        const data = await getUserData(id)
        console.log(data)

    }
    catch (err) {
        console.log(err.message)
    }
}

gettingData(1);

