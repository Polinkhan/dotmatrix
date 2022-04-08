let add = (index) => {
  let dom = ``;
  for (let i = 0; i < 8; i++) {
    dom += `<div class="col-1 px-0 my-auto"><div class="dot mx-auto rounded-circle border" 
    onclick="set(${index},${i})"></div></div>`;
  }
  return `<div class="col-2 p-0 my-2">
    <p class="m-0">b${7 - index} = <span class="bVal">1<span></p>
    </div>
    ${dom}
    <div id="index" class="col-2 p-0 my-2"><p class="m-0">row ${index}</p></div>`;
};

let dom = ``;
for (let i = 0; i < 8; i++) {
  dom += `<div class="col-1 p-2 my-auto"><div class="mx-auto"><p class = "m-0">c${i} ↓ <span class="cVal">0<span></p></div></div>`;
}

let start = () => {
  document.querySelector(".row").innerHTML = `<div class="col-2 my-3"></div>
  ${dom}
  <div id="index" class="col-2 my-3"></div>`;
  for (let i = 0; i < 8; i++) {
    document.querySelector(".row").innerHTML += add(i);
  }
  $(document).ready(function () {
    $(".dot").click(function () {
      if ($(this).css("background-color") === "rgb(255, 0, 0)") {
        $(this).css("background-color", "rgba(0,0,0,0)");
      } else {
        $(this).css("background-color", "rgb(255, 0, 0)");
      }
    });
  });
};

start();

