"use strict";

const calcbp =  (selected_num, guess_num, dig = 4) => {
    const selected_arr = Array.from(selected_num.toString()).map(Number); //num to arr
    const guess_arr = Array.from(guess_num.toString()).map(Number); //num to arr
    let bool = 0;
    let bool_arr = new Array(dig);
    let pgia= 0;
    for (let i = 0; i < dig; i++) {
        if (selected_arr[i] == guess_arr[i]) {
            bool++;
            bool_arr[i] = true;
        }
        else{
            bool_arr[i] = false;
        }
    }
    
    for (let i = 0; i < dig; i++) {
        for (let j = 0; j <dig; j++) {
            if (selected_arr[i] == guess_arr[j] && bool_arr[i] == false && i != j && !bool_arr[j]) {
                pgia++;
            }
        }
    }
    return [bool, pgia];
}