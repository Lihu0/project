"use strict";

// const len = prompt('משחק בול פגיעה, הזן את אורך המספר שנשחק הפעם' ,5) ;
const len = 5;
const min = 10 ** (len - 1);
const max = (10 ** len) -1;
let x = 0;
let rnd = Math.random() * (max - min);
rnd = Math.floor(rnd) + 1 + min;
const href = window.location.href
let n = href[href.indexOf("n=")+2]

document.write('<br>')
document.write('<form action="#" dir="rtl" style = "text-align:center; margin:0 auto;">')
document.write('<label>הזן כמות בולים:</label>')
document.write('<input type="text" name="b" >&nbsp;<br><br>')
document.write('<label>הזן כמות פגיעות:</label>')
document.write('<input type="text" name="p" >&nbsp;<br><br>')
document.write('<label>קדם מספר לניחוש הבא:</label>')
document.write(`<input type="text" name="n">&nbsp;<br><br>`)
document.write('<button>ENTER</button>&nbsp;')
document.write('</form>')
for (let i = 1; i < 4; i++){
    let now = rnd
    if (i == n){
        user(now)
    }
}