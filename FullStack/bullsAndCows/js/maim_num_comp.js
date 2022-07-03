"use strict";

const input = document.querySelector('#input');
const dig = 4;
const main = document.querySelector('#main');
const rnd = rnd_num(dig);
let tries = 0;
input.innerHTML = `<input type="number" min="${10 ** (dig - 1)}" max="${10 ** dig - 1}" id="input_num">`;
input.innerHTML += '<br>';
for (let i = 1; i < 10; i++) {
    input.innerHTML += `<button onclick = "onclick_num(${i});">${i}</button>`;
    if (i % 3 == 0)
        input.innerHTML += '<br>';
}
input.innerHTML += '<button onclick = "onclick_num(0);">0</button>';
input.innerHTML += '<button onclick="onclick_del();">del</button>';
input.innerHTML += '<button onclick="onclick_c();">c</button>';
input.innerHTML += '<br>';
input.innerHTML += '<button onclick = "onclick_enter()">enter</button>';
main.innerHTML +=  `המחשב בחר מספר בין ${dig} ספרות, נסו לנחש את המספר`;
main.innerHTML +=  `<br>למספר אין ספרות שוות *`;
main.innerHTML +=  `<br>המספר לא מתחיל ב 0 *`;
main.innerHTML +=  `<br><table class="table"><thead><tr><th>ניחוש</th><th>בולים</th><th>פגיעות</th><th>ניסיון</th></tr></thead><tbody id="table"></tbody>`;
