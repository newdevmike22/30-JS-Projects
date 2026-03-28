const counterEl = document.querySelector(".counter");
const loadingBarEl = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  loadingBarEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 20);
  }
}
