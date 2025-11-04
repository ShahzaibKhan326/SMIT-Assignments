//  function nextChange()
//      {
//      let containerTwo =document.querySelector(".container-section2");
//      let containerThree =document.querySelector(".container-section3");

//       if(containerTwo.style.display === "")
//       {
//         containerTwo.style.display="none";
//         containerThree.style.display="flex";
//       }
//      }

//      function preChange()
//      {
//      let containerTwo =document.querySelector(".container-section2");
//      let containerThree =document.querySelector(".container-section3");
//      if(containerTwo.style.display === "none")
//       {
//         containerTwo.style.display="flex";
//         containerThree.style.display="none";
//       }
//      }

function nextChange() {
  let containerTwo = document.querySelector(".container-section2");
  let containerThree = document.querySelector(".container-section3");

  // Get computed (actual) display style
  let displayTwo = window.getComputedStyle(containerTwo).display;

  if (displayTwo !== "none") {
    containerTwo.style.display = "none";
    containerThree.style.display = "flex";
  }
}

function preChange() {
  let containerTwo = document.querySelector(".container-section2");
  let containerThree = document.querySelector(".container-section3");

  let displayTwo = window.getComputedStyle(containerTwo).display;

  if (displayTwo === "none") {
    containerTwo.style.display = "flex";
    containerThree.style.display = "none";
  }
}

     