// firstly we have a normal fucntioon 


function debounce(fn, delay) {
    let timer

    return function (...args) {
        console.log(args)
        clearInterval(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}


const fetchData = (query) => {

    console.log(query)

}

const debounceFetch = debounce(fetchData, 5000)

debounceFetch('aashu')
debounceFetch('aashu1')
debounceFetch('aashu2')
debounceFetch('aashu3')
debounceFetch('aashu4', "got selected")

// so in above way every time function call is happening , but we want to applu here debouncing 
