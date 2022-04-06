let bArray = [1,1,1,1,1,1,1,1];
let cArray = [0,0,0,0,0,0,0,0];

let set = (i,j)=>{
  document.querySelectorAll(".bVal")[i].innerText = "0";
  document.querySelectorAll(".cVal")[j].innerText = "1";
  bArray[7-i] = 0;
  cArray[j] = 1;

  document.querySelector("#B").innerText = parseInt(bArray.join(""),2).toString(16);
  document.querySelector("#B-b").innerText = bArray.join("");
  document.querySelector("#C").innerText = parseInt(cArray.join(""),2).toString(16);
  document.querySelector("#C-b").innerText = cArray.join("");
}

let reset = ()=>{
  bArray = [1,1,1,1,1,1,1,1];
  cArray = [0,0,0,0,0,0,0,0];
  document.querySelector("#B").innerText = "ff";
  document.querySelector("#B-b").innerText = "11111111";
  document.querySelector("#C").innerText = "00";
  document.querySelector("#C-b").innerText = "00000000";
  start();
}
