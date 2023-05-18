//let elem = document.getElementById("boxA");
//console.log(elem);
//elem.onclick = () => {
//elem.classList.toggle("box--clicked");
//};

//let boxes =
//  document.getElementsByClassName("box");
//for (let i = 0; i < boxes.length; i++) {
//  boxes[i].onclick = function () {
//    boxes[i].classList.toggle("box-- clicked");
//  };
//}
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.onclick = function () {
    box.classList.toggle("box--clicked");
  };
});
