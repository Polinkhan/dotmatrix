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
  isVisit[i][7-j] = 1 - isVisit[i][7-j];
  document.querySelectorAll(".bVal")[i].innerText = sum(i, j).row;
  document.querySelectorAll(".cVal")[j].innerText = sum(i, j).col;
};

let reset = () => {
  setInitialVariable();
  start();
  Genarate();
};

let isVisit,hasrow;
setInitialVariable();

