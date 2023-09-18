console.log("Start of the execution queue");

setTimeout(function () {}, 0);

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("End of the loop printing");
console.log('final code block to be executed');