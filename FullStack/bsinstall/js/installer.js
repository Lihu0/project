"use strict";

let url = window.location.href;
let varsStrStart = url.indexOf("?");
let varsStr = "";
for (let i = varsStrStart + 1; i < url.length; i++){
    varsStr += url[i];
}
let language = varsStr[varsStr.indexOf("e") + 2];
let allSite = document.querySelector("#cdn");
let minIndex = url.indexOf("min")

if (minIndex == -1) {
    switch(language){
        case "c": // css
           allSite.innerHTML += '<code>&lt;!-- CSS only --><br>&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"&gt;</code>'
           allSite.innerHTML += '<a href = "./bs/bootstrap.css" dir = "rtl"download>התקן!</a>'
            break;
        case "j": //js
            allSite.innerHTML = '<code>&lt;!-- JavaScript Bundle with Popper --><br>&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">&lt;/script></code>'
            allSite.innerHTML += '<a href="./bs/bootstrap.js" dir = "rtl" download>התקן!</a>'
            break;
    }
}

else {
    switch(language){
        case "c": // css
           allSite.innerHTML = '<code>&lt;!-- CSS only --><br>&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"&gt;</code>'
           allSite.innerHTML += '<a href = "./bs/bootstrap.min.css" dir = "rtl"download>התקן!</a>'
            break;
        case "j": //js
            allSite.innerHTML = '<code>&lt;!-- JavaScript Bundle with Popper --><br>&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">&lt;/script></code>'
            allSite.innerHTML += '<a href="./bs/bootstrap.min.js" dir = "rtl" download>התקן!</a>'
            break;
    }
}