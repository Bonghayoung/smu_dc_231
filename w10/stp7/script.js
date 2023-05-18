//let elem = document.getElementById("boxA");
//console.log(elem);
//elem.onclick = () => {
//elem.classList.toggle("box--clicked");
//};

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.onclick = function () {
    box.classList.toggle("box--clicked");
  };
});

//function () {} 는 () => { } 와 같다.
//영상속 stp7은 금요일 비대면에서의 javascript를 불러오기임
//  <script src="js/script.js"></script>
