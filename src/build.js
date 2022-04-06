let add = (index) => {
  
  let dom = ``;
  for (let i = 0; i < 8; i++) {
    dom += `<div class="col-1 my-auto"><div class="dot mx-auto rounded-circle border" 
    onclick="set(${index},${i})"></div></div>`;
  }
  return `<div class="col-2 my-1">
    <p class="m-0">a${7-index} = 1</p>
    <p class="m-0">b${7-index} = <span class="bVal">${bArray[7-index]}<span></p>
    </div>
    ${dom}
    <div id="index" class="col-2 my-1"></div>`;
};

  let dom = ``;
  for (let i = 0; i < 8; i++) {
    dom += `<div class="col-1 my-auto"><div class=" mx-auto"><p>c${i} = <span class="cVal">${cArray[i]}<span></p></div></div>`;
  }

  let start = ()=>{
  document.querySelector(".row").innerHTML = `<div class="col-2 my-3"></div>
  ${dom}
  <div id="index" class="col-2 my-3"></div>`;
  for (let i = 0; i < 8; i++) {
    document.querySelector(".row").innerHTML += add(i);
  }
  $(document).ready(function () {
    $(".dot").click(function() {
      $(this).css("background-color", "red");
  });
});
}

start();