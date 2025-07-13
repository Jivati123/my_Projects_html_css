// let div = document.querySelector("div");
// console.dir(div);

let h2 = document.querySelector("h2");
// console.dir(h2);

// console.log(h2.innerText = h2.innerText + "from Apna College students");


let jivati = document.querySelectorAll (".box");
console.dir(jivati);

// jivati[0] = jivati[0] + "hello Jivati !!!";

let idx = 1;
for (jiv of jivati){
    jiv.innerText = 'New update ${jiv}';
    idx++;
    console.log(jiv);

}

