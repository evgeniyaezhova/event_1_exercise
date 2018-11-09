document.addEventListener(("DOMContentLoaded"), () => {

let counter = document.querySelector(".countdown");
let pic = document.querySelector(".jack-hiding");
let button = document.querySelector(".button");
let num = Number(counter.innerText);

const stopTimer = () => {
 const time = setInterval(() => {
  num--;
  counter.innerHTML = `${num}`;
  if(num === 0) {
    clearInterval(time)
    pic.classList.remove("jack-hiding")
    pic.classList.add("jack-revealed")
  }
 }, 1000)
}

  button.addEventListener(("click"), () => {
    if(num === 0){
      window.location.reload();
    } else if(num === 5) {
      stopTimer();
    }
  })

})
