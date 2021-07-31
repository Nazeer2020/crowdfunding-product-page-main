"strict mode";

const barsBtn = document.querySelector(".bars");
const mobileMenu = document.querySelector(".mobile-menu");
const masterCard = document.querySelector(".master-card");
const collectAmount = document.querySelector(".collect-amount");
const aboutProject = document.querySelector(".about-project");
const header = document.querySelector("header");
const bamboo = document.querySelector(".Bamboo");
const black = document.querySelector(".Black");
const specail = document.querySelector(".specail");
const pledgeNoReward = document.querySelector(".Pledge-no-reward");
const succesModal = document.querySelector(".success-modal");
const inputElement = document.querySelectorAll("input[type=radio]");
const reward01 = document.querySelector(".reward-01");
const reward02 = document.querySelector(".reward-02");
const reward03 = document.querySelector(".reward-03");
const pledgestart01 = document.querySelector(".pledge-start01");
const pledgestart02 = document.querySelector(".pledge-start02");
const pledgestart03 = document.querySelector(".pledge-start03");
const btn = document.querySelectorAll(".btn");
const selectModal = document.querySelector(".select-modal");
const closebtn = document.querySelectorAll(".closebtn");
const inputFillEle = document.querySelectorAll("input[type=text]");
const rewardBtn = document.querySelectorAll(".rewardBtn");
let collection = Number(document.querySelector(".collection").innerHTML);
const collection02 = document.querySelector(".collection")
const progressLine = document.querySelector(".progress-line");
const bottomBorder01 = document.querySelector(".bottom-border01");
const bottomBorder02 = document.querySelector(".bottom-border02");
const bottomBorder03 = document.querySelector(".bottom-border03");


let placeholderValue;

barsBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu-hide");
  barsBtn.classList.toggle("fa-times");
  masterCard.classList.toggle("brightcolorGray");
  collectAmount.classList.toggle("brightcolorGray");
  aboutProject.classList.toggle("colorGray");
  bamboo.classList.toggle("brightcolorGray");
  black.classList.toggle("brightcolorGray");
  specail.classList.toggle("brightcolorGray");
});

inputElement.forEach((e) => {
  e.addEventListener("change", () => {
    console.log(e.classList.value);
    if (e.classList.value === "noReward") {
      pledgeNoReward.classList.toggle("borderblue");
      succesModal.classList.add("show");
      selectModal.classList.add("Opacity")
    } else if (e.classList.value === "reward-25") {
      bottomBorder01.classList.add("show");
      
      reward01.classList.toggle("borderblue");
      pledgestart01.classList.toggle("show");
    } else if (e.classList.value === "reward-75") {
      bottomBorder02.classList.add("show");
      
      reward02.classList.toggle("borderblue");
      pledgestart02.classList.toggle("show");
    } else if (e.classList.value === "reward-200") {
      bottomBorder03.classList.add("show");
      
      reward03.classList.toggle("borderblue");
      pledgestart03.classList.toggle("show");
    }
  });
});

btn.forEach((e) => {
  e.addEventListener("click", () => {
    selectModal.classList.add("show");
    selectModal.classList.remove("Opacity")
    masterCard.classList.add("Opacity");
    collectAmount.classList.add("Opacity");
    aboutProject.classList.add("Opacity");
    header.classList.add("Opacity");
  });
});



inputFillEle.forEach(e => {
  e.addEventListener('input', ()=>{
    
    placeholderValue = Number(e.placeholder);
  
    if(e.value === e.placeholder){
      e.style.borderColor  = "hsl(176, 50%, 47%)"
  
      rewardBtn.forEach(e =>{
        e.addEventListener("click", ()=>{
          
          
          succesModal.classList.add("show");
          selectModal.classList.add("Opacity")
        })
      })

    } else {
      e.style.borderColor  = "red"
      
    }
  })
})

function bar(value){
 collection = collection + value;
 const progress = 89.914 + (value/100);
 collection02.innerHTML = `$${collection}`;
 progressLine.style.width =`${progress}%`

}

closebtn.forEach((e) => {
  e.addEventListener("click", () => {
    setTimeout(() => {
      bar(placeholderValue)
    }, 3000);
    selectModal.classList.remove("show");
    succesModal.classList.remove("show");
    masterCard.classList.remove("Opacity");
    collectAmount.classList.remove("Opacity");
    aboutProject.classList.remove("Opacity");
    header.classList.remove("Opacity");
  });
});




