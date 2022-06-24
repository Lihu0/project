"use strict";

const num_bp = (num1, num2) => {
    let arrNum1 = Array.from(String(num1), Number);
    let arrNum2 = Array.from(String(num2), Number);
    let bool = 0;
    let boolArr = [false, false, false, false];
    for (let i = 0; i < arrNum1.length; i++) {
        if (arrNum1[i] === arrNum2[i]) {
            bool++;
            boolArr[i] = true;
        }
    }
    let p = 0;
    for (let i = 0; i < arrNum1.length; i++) {
        for (let j = 0; j < arrNum1.length; j++) {
            if (i != j && arrNum1[i] === arrNum2[j]) {
                p++;
                break;
            }
        }
    }
    let arr = [p, bool]
    return arr;
}

const user = (num) => {
    const href = window.location.href
    let b = href[href.indexOf("b=")+2]
    let p = href[href.indexOf("p=")+2]
    document.write(`<div style = "text-align:center; margin:0 auto;">הניחוש שלי :${num}<br>בולים: ${b}<br>פגיעה: ${p}</div>`)
    document.write('<hr>')
    let arr = [num, p, b]
    return arr;
}