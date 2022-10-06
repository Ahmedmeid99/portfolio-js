// calc exp
const expEls = document.querySelectorAll(".calc-exp");
const startPoint = new Date("8-12-2021");
const endPoint = new Date();
console.log(startPoint.getMonth());
console.log(endPoint.getMonth());
expEls.forEach((expEl)=>{
  expEl.innerHTML = startPoint.getMonth() - endPoint.getMonth() + 12;
})
// navbar

let links = document.querySelectorAll("nav ul li");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
const ul = document.querySelector("ul");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("active");
    });

    link.classList.add("active");
    ul.style.cssText = "right: -550px;";
  });
});
menu.addEventListener("click", () => {
  ul.style.cssText = "right: 0;";
});
close.addEventListener("click", () => {
  ul.style.cssText = "right: -550px;";
});
let move = document.querySelector(".move");
move.addEventListener("click", () => {
  window.scrollTo({
    top: 350,
    behavior: "smooth",
  });
});
// valid form
// const form=document.querySelector('.signin')
// const signinBody=document.querySelector('.signin-body')
// //open form
// const btn=document.querySelector('.btn')
// btn.addEventListener('click',()=>{
//         form.style.cssText="transform: translate(-50%, -50%) scale(1);"
//         signinBody.style.cssText="display: block;"
// })
// //close form
// const closeForm=document.querySelector('.close-form')
// closeForm.addEventListener('click',()=>{
//     form.style.cssText="transform: translate(-50%, -50%) scale(0);"
//         signinBody.style.cssText="display: none;"
// })
/*---------- valid Form 1---------*/
// const good=document.querySelector('.good')
// const error=document.querySelector('.error')
// document.getElementById('register').onsubmit=function(){
//     let inputValue=document.getElementById('phone').value
//     const inputRe=/\(\d{4}\)\s\d{3}-\d{4}/;//(1234) 567-8910
//     const validationResult=inputRe.test(inputValue)
//       if(validationResult===false){
//         error.style.cssText='display: block;'
//         good.style.cssText='display: none;'
//         return false;
//     }
//     else{
//         good.style.cssText='display: block;'
//     error.style.cssText='display: none;'
//     return true;

//     }
// }

//  toTop
//  show icon onscroll
let toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTop.style.right = "30px";
  } else {
    toTop.style.right = "-60px";
  }
});
//  go to top
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//button Dark
const btnDark = document.querySelector(".to-dark");
const btnCicle = document.querySelector(".cicle");
//add Dark style to elements
const header = document.querySelector("header");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const cards = document.querySelectorAll(".card");
const rows = document.querySelectorAll(".row");
const header2 = document.querySelectorAll("h2");
const header3 = document.querySelectorAll("h3");
const par = document.querySelectorAll("p");
const aboutPar = document.querySelectorAll(".about-me p");
const aboutH2 = document.querySelectorAll(".about-me h2");
const sectionTitles = document.querySelectorAll(".section-title");

btnDark.addEventListener("click", () => {
  if (btnDark.classList.contains("classdark") === false) {
    btnDark.classList.add("classdark");

    btnCicle.style.cssText = "background-color: #393fb2; margin-left: 23px;";
    btnDark.style.cssText = "background-color:#00000070;";
    body.style.cssText = "background-color: rgb(12 12 12);";

    header.classList.add("dark-mode");
    footer.classList.add("dark-mode");
    cards.forEach((card) => {
      card.style.cssText = "background-color: rgb(5 5 32);";
    });
    rows.forEach((ele) => {
      ele.classList.add("dark-mode");
    });
    header2.forEach((ele) => {
      ele.style.cssText = "color:rgb(219 219 219);";
    });
    header3.forEach((ele) => {
      ele.style.cssText = "color:rgb(219 219 219);";
    });

    par.forEach((ele) => {
      ele.style.cssText = "color:rgb(219 219 219);";
    });
    aboutPar.forEach((ele) => {
      ele.style.cssText = "color:#fff;";
    });
    aboutH2.forEach((ele) => {
      ele.style.cssText = "color:#ffff;";
    });
    sectionTitles.forEach((ele) => {
      ele.style.cssText = "color:#a7a7a7;";
    });

    skills.style.cssText = "background-color:rgb(18 18 18)";
  } else {
    btnDark.classList.remove("classdark");
    par.forEach((ele) => {
      ele.style.cssText = "color:black;";
    });
    btnCicle.style.cssText = "background-color: #393fb2; margin-left: 0px;";
    btnDark.style.cssText = "background-color: rgb(209 211 237);";
    body.style.cssText = "background-color: #fff;";

    header.classList.remove("dark-mode");
    footer.classList.remove("dark-mode");
    cards.forEach((card) => {
      card.style.cssText = "background-color:#fff;";
    });
    rows.forEach((ele) => {
      ele.classList.remove("dark-mode");
    });
    header2.forEach((ele) => {
      ele.style.cssText = "color:black;";
    });
    header3.forEach((ele) => {
      ele.style.cssText = "color:black;";
    });
    aboutPar.forEach((ele) => {
      ele.style.cssText = "color:#333;";
    });
    aboutH2.forEach((ele) => {
      ele.style.cssText = "color:#ffff;";
    });
    sectionTitles.forEach((ele) => {
      ele.style.cssText = "color:#a7a7a7;";
    });
    skills.style.cssText = "background-color:#efefef;";
  }
});

// skills
const skills = document.querySelector(".skills");
const nums = document.querySelectorAll(".nums");
window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop - 500) {
    nums.forEach((num) => {
      num.style.width = num.dataset.width;
    });
  } else if (window.scrollY <= skills.offsetTop - 500) {
    nums.forEach((num) => {
      num.style.width = "0";
    });
  }
});
