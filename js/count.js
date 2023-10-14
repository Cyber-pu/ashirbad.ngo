let target = 83.1;
let duration = 3000;
const setTime = Math.abs(Math.floor(duration / target));
let currentNumber = 0;
let countableNumber = document.querySelector(".top h1");

function updateNumber() {
  currentNumber=currentNumber+2;
  countableNumber.textContent = currentNumber+"mn";

  if (currentNumber < target) {
    setTimeout(updateNumber, setTime);
  }
}

const observe_num = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observe_num.unobserve(entry.target);
      updateNumber();
    }
  });
});

observe_num.observe(countableNumber);



// top  fisrt count 

let target1 = 21;
let duration1= 3000;
const setTime1 = Math.abs(Math.floor(duration1 / target1));
let currentNumber1 = 0;
let countableNumber1= document.querySelector(".f");

function updateNumber1() {
  currentNumber1=currentNumber1+2;
  countableNumber1.textContent = currentNumber1;

  if (currentNumber1 < target1) {
    setTimeout(updateNumber1, setTime1);
  }
}

const observe_num1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observe_num1.unobserve(entry.target);
      updateNumber1();
    }
  });
});

observe_num1.observe(countableNumber1);





// mid  fisrt count 

let target2 = 290;
let duration2= 3000;
const setTime2 = Math.abs(Math.floor(duration2 / target2));
let currentNumber2 = 0;
let countableNumber2= document.querySelector(".m");

function updateNumber2() {
  currentNumber2=currentNumber2+2;
  countableNumber2.textContent = currentNumber2+"+";

  if (currentNumber2 < target2) {
    setTimeout(updateNumber2, setTime2);
  }
}

const observe_num2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observe_num2.unobserve(entry.target);
      updateNumber2();
    }
  });
});

observe_num2.observe(countableNumber2);


// low  fisrt count 

let target3 = 150;
let duration3= 3000;
const setTime3 = Math.abs(Math.floor(duration3 / target3));
let currentNumber3 = 0;
let countableNumber3= document.querySelector(".l");

function updateNumber3() {
  currentNumber3=currentNumber3+2;
  countableNumber3.textContent = currentNumber3;

  if (currentNumber3 < target3) {
    setTimeout(updateNumber3, setTime3);
  }
}

const observe_num3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observe_num3.unobserve(entry.target);
      updateNumber3();
    }
  });
});

observe_num3.observe(countableNumber3);


// circular bar count 
let target4 = 95;
let duration4= 4000;
const setTime4 = Math.abs(Math.floor(duration4 / target4));
let currentNumber4 = 0;
let countableNumber4= document.querySelector(".how  .circle h2");

function updateNumber4() {
  currentNumber4=currentNumber4+1;
  countableNumber4.textContent = currentNumber4+"%";

  if (currentNumber4 < target4) {
    setTimeout(updateNumber4, setTime4);
  }
}

const observe_num4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observe_num4.unobserve(entry.target);
      updateNumber4();
    }
  });
});

observe_num4.observe(countableNumber4);
