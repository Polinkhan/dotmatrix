let print = document.querySelector("#code");

Genarate_reset = () =>{
  print.innerText = "";
}

Genarate = () => {
  print.innerText = `=====================================\nA SEGMENT PARA PUBLIC 'CODE'\nASSUME CS: A\nORG 1000H\n\nS:\nMOV AL, 80H\nOUT 1EH, AL\n\nB:\nMOV AL, 00H\nOUT 1CH, AL\nMOV AL, 0FFH\nOUT 18H, AL\nOUT 1BH, AL\n\nC:\n`;
  for (let i = 0; i < 8; i++) {
    if (hasrow[i]) {
      let row = [1, 1, 1, 1, 1, 1, 1, 1];
      row[i] = 0;
      let portB = parseInt(row.join(""), 2).toString(16);
      let portC = parseInt(isVisit[i].join(""), 2).toString(16);

      print.innerText += `\n;for row ${
        i + 1
      }\n MOV AL, 0FFH\nOUT 18H, AL\n\nMOV AL, 0${portB}H\nOUT 1AH, AL\n\nMOV AL, 0${portC}H\nOUT 1CH, AL\n\nMOV AL, 00H\nOUT 1CH, AL\n;-----------------`;
    }
  }
  print.innerText += `\nJMP C\nA ENDS\nEND\n=====================================`;
};
