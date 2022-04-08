let setInitialVariable = () => {
  isVisit = [];
  hasrow = [];
  for (let i = 0; i < 8; i++) {
    isVisit.push([0, 0, 0, 0, 0, 0, 0, 0]);
    hasrow.push(0);
  }
};

let sum = (i, j) => {
  let val = { row: 1, col: 0 };
  for (let k = 0; k < 8; k++) {
    if (isVisit[i][k] == 1) val.row = 0;
    if (isVisit[k][j] == 1) val.col = 1;
  }
  hasrow[i] = 1 - val.row;
  return val;
};

let set = (i, j) => {
  j = 7 - j;
  isVisit[i][j] = 1 - isVisit[i][j];
  document.querySelectorAll(".bVal")[i].innerText = sum(i, j).row;
  document.querySelectorAll(".cVal")[7 - j].innerText = sum(i, j).col;
};

let reset = () => {
  setInitialVariable();
  start();
  Genarate_reset();
};

let copy = () => {
  let r = document.createRange();
  r.selectNode(document.getElementById("code"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

let isVisit, hasrow;
setInitialVariable();
