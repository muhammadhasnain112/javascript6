
let random1 = (Math.random() * 26) + 65
let random2 = (Math.random() * 26) + 97
let random3 = (Math.random() * 26) + 97
let random4 = (Math.random() * 1)+64
let random5 = Math.floor(Math.random() * 10)
let random6 = Math.floor(Math.random() * 10)
let random7 = Math.floor(Math.random() * 10)


let check1 = String.fromCharCode(random1)
let check2 = String.fromCharCode(random2)
let check3 = String.fromCharCode(random3)
let check4 = String.fromCharCode(random4)

let checking = check1 + check2 + check3 + check4 + random5 + random6 + random7;
document.write(`<h1>  Random A Generate Password <br>  <br> ${checking}`)