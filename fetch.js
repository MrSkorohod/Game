"use strict";
const url = 'https://fe.it-academy.by/AjaxStringStorage2.php';
function fetchRes(m, par){
    return fetch(url, {
        method: m,
        body: new URLSearchParams(par),
    })
}

    fetchRes("POST", {
        f: "LOCKGET",
        n: "SKOROHOD_010895",
        p: "unknownPass"
    })
        .then(response => response.json())
        .then(()=>{
            fetchRes("POST", {
                f: "UPDATE",
                n: "SKOROHOD_010895",
                v: points,
                p: "unknownPass"
            })
        })
        .then(()=>{
            fetchRes("POST", {
                f: "READ",
                n: "SKOROHOD_010895",
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));



// let promise = fetch(url,{
//     method: "POST",
//     body: new URLSearchParams({
//         f: "LOCKGET",
//         n: "SKOROHOD_010895",
//         p: "unknownPass"
//     })
// })
//     .then(response => response.json())
//     .then(() =>
//         fetch(url, {
//             method: "POST",
//             body: new URLSearchParams({
//                 f: "UPDATE",
//                 n: "SKOROHOD_010895",
//                 v: "SOmething",
//                 p: "unknownPass"
//             })
//         }))
//     .then(()=>fetch(url, {
//         method:"POST",
//         body: new URLSearchParams({
//             f: "READ",
//             n: "SKOROHOD_010895",
//         })
//         }))
//     .then(response => response.json())
//     .then(data => console.log(data));

// const login = document.getElementById('login')
// const allBtn = document.querySelectorAll('button')

// const pass = 'ret5'
// const name = 'ST_TEST_234158'
// const setInfo = 'INSERT'
// const getInfo = 'READ'
// const updateInfo = 'UPDATE'
// const lockInfo = 'LOCKGET'
//
// allBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         if (btn.id === 'send') {
//             fetchInfo('post', {
//                 f: lockInfo,
//                 n: name,
//                 p: pass
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     fetchInfo('post', {
//                         f: updateInfo,
//                         n: name,
//                         p: pass,
//                         v: data.result+', '+login.value
//                     })
//                 })
//         }
//         if (btn.id === 'get') {
//             fetchInfo('post', {
//                 f: getInfo,
//                 n: name
//             })
//                 .then(response => response.json())
//                 .then(data => console.log(data))
//         }
//     })
// })
//
// function fetchInfo(m, par) {
//     return fetch(url, {
//         method: m,
//         body: new URLSearchParams(par),
//     })
// }
