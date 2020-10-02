var textMain = "All Design and Project to show.";
var textFirst = "Get Full Access of Project & Design.";
var textSecond = "Your ingenuity build Project.";
var textThird = "Create your own team & Design.";
var textFourth = "Think Different and build Design. ";

const secondCardColor = "#dee1ff";
const thirdCardColor = "#eeffab";
const fourthCardColor = "#ff8d8d";
const fifthCardColor = "#ddffc8";

function mainChange() {
  var time1go = 5000;
  var time2ros = 5100;
  var time2go = 10000;
  var time3ros = 10010;
  var time3go = 15000;
  var time4ros = 15010;
  var time4go = 20010;
  var time5ros = 20020;
  var time5go = 25020;

  var cardGo1 = setTimeout(tran1, time1go);
  var myVarcard2 = setTimeout(card2, time2ros);
  var cardGo2 = setTimeout(tran2, time2go);
  var myVarcard3 = setTimeout(card3, time3ros);
  var cardGo3 = setTimeout(tran3, time3go);
  var myVarcard4 = setTimeout(card4, time4ros);
  var cardGo4 = setTimeout(tran4, time4go);
  var myVarcard5 = setTimeout(card5, time5ros);
  var cardGo5 = setTimeout(tran5, time5go);
  // First card to go Display none and second card to show
  function tran1() {
    var tran1 = document.querySelector(".tran1");
    var tranImg4 = document.querySelector(".swipe_img4");
    var tranImg5 = document.querySelector(".swipe_img5");
    tranImg4.style.transform = "rotateX(5deg)";
    tranImg5.style.transform = "rotateX(5deg)";
    tran1.style.transform = "translate3d(1079px, 0px, 0px)";
    tran1.style.transition = "transform 0.2s ease-in";
  }

  // Second card show and rotate to display of that also have to text to change another text show of them
  function card2() {
    var card2 = document.querySelector(".swipe_img2");
    card2.style.transform = "rotateX(5deg)";
    card2.style.transition = "transform .5s ease-out";
    var changeText = document.querySelector(".change");
    changeText.classList.add("active");
    changeText.classList.remove("actives");
    changeText.innerHTML = textFirst;
    var body = document.querySelector("body");
    // body.style.backgroundColor = "#CDF567";
    body.style.backgroundColor = secondCardColor;
  }

  // Second card to go and third one to show of them
  function tran2() {
    var tran2 = document.querySelector(".tran2");
    tran2.style.transform = "translate3d(1500px, 0px, 0px)";
    tran2.style.transition = "transform 0.2s ease-out";
  }

  // Third card to show to rotate to show completely and also have text changed the text
  function card3() {
    var tranImg4 = document.querySelector(".swipe_img4");
    var tranImg5 = document.querySelector(".swipe_img5");

    var card3 = document.querySelector(".swipe_img3");
    card3.style.transform = "rotateX(5deg)";
    tranImg4.style.transform =
      "rotateX(5deg) rotateY(4.19579deg) rotateZ(-10.0421deg)";
    tranImg5.style.transform =
      "rotateX(5deg) rotateY(4.19579deg) rotateZ(9.9579deg)";
    card3.style.transition = "transform .5s ease-out";
    var changeText = document.querySelector(".change");
    changeText.classList.add("actives");
    changeText.classList.remove("active");
    changeText.innerHTML = textSecond;
    var body = document.querySelector("body");
    body.style.backgroundColor = "antiquewhite";
  }
  //Third card to go and repete the same actoin performe.
  function tran3() {
    var tran3 = document.querySelector(".tran3");
    tran3.style.transform = "translate3d(1500px, 0px, 0px)";
    tran3.style.transition = "transform 0.2s ease-out";
  }

  function card4() {
    var card4 = document.querySelector(".swipe_img4");
    card4.style.transform = "rotateX(5deg)";
    card4.style.transition = "transform .5s ease-out";
    var changeText = document.querySelector(".change");
    changeText.classList.add("active");
    changeText.classList.remove("actives");
    changeText.innerHTML = textThird;
    var body = document.querySelector("body");
    body.style.backgroundColor = fourthCardColor;
  }

  function tran4() {
    var tran4 = document.querySelector(".tran4");
    tran4.style.transform = "translate3d(1500px, 0px, 0px)";
    tran4.style.transition = "transform 0.2s ease-out";
  }

  function card5() {
    var card5 = document.querySelector(".swipe_img5");
    card5.style.transform = "rotateX(5deg)";
    card5.style.transition = "transform .5s ease-out";
    var changeText = document.querySelector(".change");
    changeText.classList.add("actives");
    changeText.classList.remove("active");
    changeText.innerHTML = textFourth;
    var body = document.querySelector("body");
    body.style.backgroundColor = fifthCardColor;
  }

  function tran5() {
    var tran5 = document.querySelector(".tran5");
    tran5.style.transform = "translate3d(1500px, 0px, 0px)";
    tran5.style.transition = "transform 0.2s ease-out";
  }
}

function resetTime() {
  var cardR1 = 1000;
  var cardR2 = 1200;
  var cardAni2 = 1300;
  var cardR3 = 1500;
  var cardAni3 = 1600;
  var cardR4 = 1800;
  var cardAni4 = 1900;
  var cardR5 = 2100;
  var cardAni5 = 2200;

  var cardReturn1 = setTimeout(card1, cardR1);
  var cardReturn2 = setTimeout(card2, cardR2);
  var cardReturn3 = setTimeout(card3, cardR3);
  var cardReturn4 = setTimeout(card4, cardR4);
  var cardReturn5 = setTimeout(card5, cardR5);

  var myTran2 = setTimeout(tran2, cardAni2);
  var myTran3 = setTimeout(tran3, cardAni3);
  var myTran4 = setTimeout(tran4, cardAni4);
  var myTran5 = setTimeout(tran5, cardAni5);

  function card1() {
    var tran1 = document.querySelector(".tran1");
    tran1.style.transform = "translate3d(0px, 0px, 0px)";
    tran1.style.transition = "transform 0.2s ease-in";
    var changeText = document.querySelector(".change");
    changeText.classList.add("active");
    changeText.classList.remove("actives");
    changeText.innerHTML = textMain;

    var body = document.querySelector("body");
    body.style.backgroundColor = "#feffb1";
  }
  function card2() {
    var card2 = document.querySelector(".swipe_img2");
    // img.style.zIndex = "0";
    card2.style.transform =
      "rotateX(5deg) rotateY(4.19579deg) rotateZ(6.9579deg)";
    // setInterval((tran1.style.transform = "translate3d(1840px, 0px, 0px)"), 10000);
    // $(".swipe_img").css("z-index", "0");
  }
  function tran2() {
    var tran2 = document.querySelector(".tran2");
    tran2.style.transform = "translate3d(0px, 0px, 0px)";
    tran2.style.transition = "transform 0.5s ease-in";
  }
  function tran3() {
    var tran3 = document.querySelector(".tran3");
    tran3.style.transform = "translate3d(0px, 0px, 0px)";
    tran3.style.transition = "transform 0.8s ease-in";
  }

  function card3() {
    var card3 = document.querySelector(".swipe_img3");
    card3.style.transform =
      "rotateX(5deg) rotateY(4.19579deg) rotateZ(-10.0421deg)";
  }
  function tran4() {
    var tran4 = document.querySelector(".tran4");
    tran4.style.transform = "translate3d(0px, 0px, 0px)";
    tran4.style.transition = "transform 0.8s ease-in";
  }
  function card4() {
    var card4 = document.querySelector(".swipe_img4");
    card4.style.transform =
      "rotateX(5deg) rotateY(4.19579deg) rotateZ(-10.0421deg)";
  }
  function tran5() {
    var tran5 = document.querySelector(".tran5");
    tran5.style.transform = "translate3d(0px, 0px, 0px)";
    tran5.style.transition = "transform 0.8s ease-in";
  }
  function card5() {
    var card5 = document.querySelector(".swipe_img5");
    card5.style.transform =
      "rotateX(5deg) rotateY(4.19579deg) rotateZ(9.9579deg)";
  }
}
mainChange();
setInterval(resetTime, 25020);
setInterval(mainChange, 25020);

// setInterval((document.getElementsByClassName("swipe_img").style.zIndex = "1")),
//   time;

var shuffleCard = document.querySelector(".shufflecard");

// shuffleCard.addEventListener("click", () => {
//   var shuffleImg1 = document.getElementsByClassName("shuffle1");
//   var shuffleImg2 = document.getElementsByClassName("shuffle2");
//   var shuffleImg3 = document.getElementsByClassName("shuffle3");

//   const shuffleArray = [shuffleImg1, shuffleImg2, shuffleImg3];
//   // const s1 = shuffleArray.sort((a, b) => 0.5 - Math.random());

//   for (let i = shuffleArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = shuffleArray[i];
//     shuffleArray[i] = shuffleArray[j];
//     shuffleArray[j] = temp;
//   }
//   return shuffleArray;
// });
// Consolas, 'Courier New', monospace  font Family of current vs code editor
