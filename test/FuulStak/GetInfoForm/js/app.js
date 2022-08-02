"use strict";

const str_to_obj = str => {
    let obj = {};
    const arr_obj = str.split('&')
    arr_obj.forEach(v => {
        const args_now = v.split('=')
        obj[args_now[0]] = args_now[1].replace('+', ' ');
    }
    )
    return obj;
}

const GetInfoForm = () => {
    const url = window.location.href;
    const args = url.split("?")[1].replace('#', '');
    const argsobj = str_to_obj(args);
    return argsobj;
}

window.onload = () => {
    const title = document.querySelector('#title')
    title.innerText = `Helo ${decodeURIComponent(GetInfoForm()['name'])}`
}