// here we are seeing the use of throtlling 


const fetchData = (query) => {

    console.log(query)

}
// converting it to throttle function 


function debounce(fn, delay) {

    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime < delay)
            return
        lastTime = now;
        return fn(...args)

    }
}


const throttleFetch = debounce(fetchData, 1000)

throttleFetch("aashu")
throttleFetch("aashu2")
throttleFetch("aashu3")
throttleFetch("aashu4")
throttleFetch("aashu5")
