const imgEl = document.querySelector("#img-carosel");
const prevBtnEl = document.querySelector("#left-arrow");
const nextBtnEl = document.querySelector("#right-arrow");
const imgSrc = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
];
console.log(imgEl);

let currentIndex = 0;
let timer;
function display() {
  timer = setInterval(() => {
    if (currentIndex === 5) {
      currentIndex = 0;
    }
    console.log("i", currentIndex);
    console.log("Inside timeout");
    imgEl.src = `${imgSrc[currentIndex]}`;
    currentIndex += 1;
  }, 2000);
}

display();
prevBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(timer);

  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = imgSrc.length - 1;
  }
  imgEl.src = imgSrc[currentIndex];
  display();
});

nextBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(timer);
  currentIndex += 1;
  if (currentIndex > imgSrc.length - 1) {
    currentIndex = 0;
  }
  imgEl.src = imgSrc[currentIndex];
  display();
});
