//Website loader
let loader = document.getElementById("loader");
let hidden = document.getElementById("body");

setTimeout(function(){
    loader.classList.add("loading-ani");
    loader.style.display="none";
    hidden.classList.remove("hidden")
    },2000)
// mouserover effect

  // let intro = document.getElementById("2");
  // let intro = document.getElementsByClassName("intro");

  // if(true){
  //   intro.onmouseover = function(){
  //     document.getElementById("text").style.display='block';
  //   };
  //   intro.onmouseout = function(){
  //     document.getElementById("text").style.display='none';
  //   };
  // }

// let intro = document.querySelectorAll(".intro");

// for(let i = 0;i<intro.length;i++){
//   // document.getElementById("2")
//   document.querySelectorAll(".intro").addEventListener("mouseover", mouseOver);
// // document.getElementById("2")
// document.querySelectorAll(".intro").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementById("text").style.display = "block";
// }

// function mouseOut() {
//   document.getElementById("text").style.display = "none";
// }

// }
// Submited data
function getInputFromTextBox() {
    var inputName = document.getElementById("userName").value;
    var inputMail = document.getElementById("userMail").value;
    alert("Hello "+inputName+" Your query has been sended with your mail "+inputMail);
}

// POP Up Box
function openForm() {
    document.getElementsByClassName('hidden_form')[0].style.display='flex';
  }

  function CloseForm() {
    document.getElementsByClassName('hidden_form')[0].style.display='none';
  }