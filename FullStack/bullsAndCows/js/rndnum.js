"use strict";

const rnd_num = (dig = 4) => {
    const max = 10 ** dig - 1;
    const min = 10 ** (dig - 1);
    let stop_1 = false;
    do {
        stop_1 = false;
        var rnd = Math.round(Math.random() * (max - min) + min);
        let rnd_arr = Array.from(rnd.toString()).map(Number);
        for (let i = 0; i < rnd_arr.length; i++) {
            for (let j = 0; j < rnd_arr.length; j++) {
                if (rnd_arr[i] == rnd_arr[j] && i != j)
                    stop_1 = true;
            }
        }
    }
    while (stop_1);
    return rnd;
}