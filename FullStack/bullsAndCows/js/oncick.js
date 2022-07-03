"use strict";

const onclick_c = () =>{
    const input_num = document.querySelector('#input_num');
    input_num.value = '';
}

const onclick_del = () => {
    const input_num = document.querySelector('#input_num');
    input_num.value = (input_num.value).slice(0, -1);
}

const onclick_num = num => {
    const input_num = document.querySelector('#input_num');
    input_num.value += num.toString();
}

const onclick_enter = () => {
    const input_num = document.querySelector('#input_num');
    const value = input_num.value;
    const value_arr = Array.from(value.toString()).map(Number);
    const table = document.querySelector('#table')
    let valid_arr = []
    for (let i = 0; i < value_arr.length; i++) {
        for (let j = 0; j < value_arr.length; j++) {
            if (value_arr[i] == value_arr[j] && i != j){
                var is_valid = true;
                valid_arr[i] = true;
            }
            else if (value_arr[0] == 0)
                var is_valid = true;
            else if (value_arr.length != dig)
                var is_valid = true;
            else
                var is_valid = false;
        }
    }
    if (is_valid || valid_arr.indexOf(true) != -1){
        alert(`המספר ${value} אינו חוקי, נסה שוב`);
        input_num.value = '';
    }
    else if (calcbp(rnd, value)[0] == 4){
        alert(`כל הכבוד הצלחת ב ${tries} ניסיונות`);
        input_num.value = '';
    }
    else{
        tries++;
        table.innerHTML += `<tr><td>${value}</td><td>${calcbp(rnd, value)[0]}</td><td>${calcbp(rnd, value)[1]}</td><td>${tries}</td><tr>`;
        input_num.value = '';
    }
}