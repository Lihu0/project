"use strict";

const calculator = document.querySelector(".calculator");
const calcBtns = [[7, 8, 9, '/'], [4, 5, 6, '*'], [1, 2 ,3, '-']]; // calculator buttons
const span_4 = document.querySelector('#span_4');
const span_out = document.querySelector('#output');
let output = '';
let onclickNum = (number) => {
    output += number.toString();
    span_out.innerHTML = `${output}`;
}
for (let i = 0; i < calcBtns.length; i++){
    let calcBtnsNow = calcBtns[i];
    let spanNow = document.querySelector('#span_' + (i + 1).toString());
    for (let j = 0; j < calcBtnsNow.length; j++){
        if (j != 3){
            spanNow.innerHTML += `<span><button onclick="onclickNum(${calcBtns[i][j]})">${calcBtns[i][j]}</button></span>`;
        }
        else{
            switch(i) {
                case 0:
                    spanNow.innerHTML += `<span><button onclick="span_out.innerHTML += '/';output += '/';">${calcBtns[i][j]}</button></span><br>`;
                    break;
                case 1:
                    spanNow.innerHTML += `<span><button onclick="span_out.innerHTML += '*';output += '*';">${calcBtns[i][j]}</button></span><br>`;
                    break;
                case 2:
                    spanNow.innerHTML += `<span><button onclick="span_out.innerHTML += '-';output += '-';">${calcBtns[i][j]}</button></span><br>`;
                    break;
            }
        }
    }
}
span_4.innerHTML += '<span><button onclick="onclickNum(0)">0</button><span>';
span_4.innerHTML += '<span><button onclick="output += \'.\';span_out.innerHTML = `${output}`;">.</button><span>';
span_4.innerHTML += '<span><button onclick="span_out.innerHTML = `${eval(output)}`" >=</button><span>';
span_4.innerHTML += '<span><button onclick="span_out.innerHTML = \'0\';output = \'\'" >c</button><span>';
span_4.innerHTML += '<span><button onclick="output += \'+\';span_out.innerHTML = `${output}`;" >+</button><span>';