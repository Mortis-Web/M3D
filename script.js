// =============NAV BUTTON===========

const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
}

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==================STATIS COUNTER===================
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false;

window.onscroll = function () {
  if (window.scrollY + 200 >= section.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// ==============DIV SWITCHER================
let switchers = document.querySelectorAll(".oth");
let main = document.getElementById("main");
let first = document.getElementById("first");
let second = document.getElementById("second");
switchers.forEach(function (switcher) {
  switcher.addEventListener("click", function (e){
    if (e.target.id === "one"){
      main.style.display = "none";
      first.style.display = "flex";
      second.style.display = "none";
    }
    if (e.target.id === "two"){
      main.style.display = "none";
      second.style.display = "flex";
      first.style.display = "none";
    }
    if (e.target.id === "three"){
      main.style.display = "flex";
      main.classList.add("main");
      second.style.display = "none";
      first.style.display = "none";
    }
  });
});

