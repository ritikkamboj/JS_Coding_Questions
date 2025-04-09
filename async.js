console.log("Defer Script Start");
const start = Date.now();
while (Date.now() - start < 5000) {
    // Blocking for 5 seconds
}
console.log("Defer Script End");
document.querySelector('h1').textContent = "Defer Script Executed!";
