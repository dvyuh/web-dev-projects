const bttn = document.getElementById("bttn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 10000;
let randomnum1;
let randomnum2;
let randomnum3;

bttn.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomnum1;
    randomnum2 = Math.floor(Math.random() * max) + min;
    label2.textContent = randomnum2;
    randomnum3 = Math.floor(Math.random() * max) + min;
    label3.textContent = randomnum3;

}
