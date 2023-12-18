// ************** blocking code **************/
for (let i = 1; i < 1000000000; i++){
//i doing nothing just consuming time   
}

console.log("Task to be perform after loop");
console.log("I have to wait for this long loop  to finish :(");


//************** blocking code **************/
console.log("start");
setTimeout(() => {
    console.log("loginside timeout");
}, 0);
while (true) {
    console.log("log inside while loop");
}
console.log("end");


//*************non blocking */
const comput = () =>{
    let sum = 0;
    for (let i = 1; i <= 1000000000; i++){
        sum += i;
    }
    console.log(sum);
}
setTimeout(comput, 0);
console.log("Done!");


//*************non blocking ******************/
let i = 0;
setInterval(() => {
    i++;
    console.log(i);
}, 1000);
console.log(i);


// ************** blocking code **************/
const idle = (ms) => {
    let start = new Date().getTime();
    while (new Date().getTime() < start + ms);
}
console.log("start");
idle(5000)
console.log("end");