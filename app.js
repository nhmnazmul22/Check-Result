const subNums = document.querySelectorAll("#sub-num");
const objNums = document.querySelectorAll("#obj-num");
const totals = document.querySelectorAll("#total p");
const greads = document.querySelectorAll(".grade");
const points = document.querySelectorAll(".point");
const buttons = document.querySelectorAll("#submit-num");
const subNames = document.querySelectorAll(".sub-name");
const resultShow = document.getElementById("result");

function subNumValidation() {
  for (let subNum of subNums) {
    let newSubNum = Number.parseFloat(subNum.value);
    if (newSubNum > 70) {
      alert("Sorry! You can Enter 1-70");
      subNum.value = 0;
    }
  }
}
function objNumValidation() {
  for (let objNum of objNums) {
    let newObjNum = Number.parseFloat(objNum.value);
    if (newObjNum > 30) {
      alert("Sorry! You can Enter 1-30");
      objNum.value = 0;
    }
  }
}

function showResult() {
  for (let i = 0; i < totals.length; i++) {
    totals[i].innerText = +subNums[i].value + +objNums[i].value;
    let totalsNum = Number.parseFloat(totals[i].innerText);
    if (totalsNum >= 80 && objNums[i].value >= 10) {
      greads[i].innerHTML = "A+";
      points[i].innerHTML = 5.0;
    } else if (totalsNum >= 70 && objNums[i].value >= 10) {
      greads[i].innerHTML = "A";
      points[i].innerHTML = 4.0;
    } else if (totalsNum >= 60 && objNums[i].value >= 10) {
      greads[i].innerHTML = "A-";
      points[i].innerHTML = 3.5;
    } else if (totalsNum >= 50 && objNums[i].value >= 10) {
      greads[i].innerHTML = "B";
      points[i].innerHTML = 3.0;
    } else if (totalsNum >= 40 && objNums[i].value >= 10) {
      greads[i].innerHTML = "C";
      points[i].innerHTML = 2.0;
    } else if (totalsNum >= 33 && objNums[i].value >= 10) {
      greads[i].innerHTML = "D";
      points[i].innerHTML = 1.0;
    } else if (totalsNum >= 1) {
      greads[i].innerHTML = "F";
      points[i].innerHTML = 0;
    }
  }
}

function totalOfPoints() {
  let totalPoint = 0;
  for (let point of points) {
    let pointNum = Number.parseFloat(point.innerText);
    totalPoint += pointNum;
  }
  let MainResult = totalPoint / points.length;
  let MainResultNum = Number.parseFloat(MainResult).toFixed(2);
  if (MainResultNum == 5.0) {
    resultShow.textContent = "A+ and Pass";
  } else if (MainResultNum >= 4.0 && MainResultNum < 5.0) {
    resultShow.textContent = "A and Pass";
  } else if (MainResultNum >= 3.5 && MainResultNum < 4.0) {
    resultShow.textContent = "A- and Pass";
  } else if (MainResultNum >= 3.0 && MainResultNum < 3.5) {
    resultShow.textContent = "B and Pass. You Need Learn More";
  } else if (MainResultNum >= 2.0 && MainResultNum < 3.0) {
    resultShow.textContent = "C and Pass. You Need Learn More";
  } else if (MainResultNum >= 1.0 && MainResultNum < 2.0) {
    resultShow.textContent = "D and Pass. You Need Learn More";
  } else if (MainResultNum < 1.0) {
    resultShow.textContent = "F and Fail. You are Fail";
  }
}

function submited() {
  subNumValidation();
  objNumValidation();
  showResult();
  totalOfPoints();
}

for (let button of buttons) {
  button.addEventListener("click", () => {
    submited();
  });
}
