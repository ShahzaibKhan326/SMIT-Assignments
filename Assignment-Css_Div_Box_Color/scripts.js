
let colorRegex =/^[A-Za-z\s]+$/

 function changeColorCondition(userInput,resultToShow,targetID,allEmpty=false,name,property)
 {
   if(allEmpty)
   {
      resultToShow.innerText="Input Feilds are Empty";
      resultToShow.classList.add("messageFailed");
      resultToShow.classList.remove("messagePassed");
      
      
    // Reset both target colors to default
    document.getElementById("flex_heading").style.backgroundColor = "";
    document.getElementById("flex_heading").style.color = "";
    document.getElementById("flex_box").style.backgroundColor = "";
    document.getElementById("flex_box").style.color = "";
   }
    else if(userInput==="")
   {
   resultToShow.innerHTML =name +" field is empty";
   resultToShow.classList.add("messageFailed")
   resultToShow.classList.remove("messagePassed");
   } 
   else if(!colorRegex.test(userInput))
   {
   resultToShow.innerText="Color name should not include \nNumbers or Symbols";
   resultToShow.classList.add("messageFailed");
   resultToShow.classList.remove("messagePassed");
   }
   else  {
      targetID.style[property]=userInput;
      resultToShow.innerText =`${property === "backgroundColor" ? "Background" : "Color"} changed successfully!`;
      resultToShow.classList.add("messagePassed")
      resultToShow.classList.remove("messageFailed");
   }
 }
function VarIn(user_in,message_re,tar_ID,name,property)
{
    let userColor =document.getElementById(user_in).value.trim();
    let message=document.getElementById(message_re);
    let target=document.getElementById(tar_ID);
    let fieldname=name;

    let headingInput = document.getElementById("heading_font_color_input").value.trim();
    let fontInput = document.getElementById("font_color_input").value.trim();
    let bgInput = document.getElementById("heading_bg_color_input").value.trim();
    let allEmpty=(headingInput === "" && fontInput==="" && bgInput === "")
    changeColorCondition(userColor,message,target,allEmpty,fieldname,property);
}
function headingFontColor()
{
   VarIn("heading_font_color_input","result","flex_heading","Heading Color","color");
}
function headingBgColor()
{
   VarIn("heading_bg_color_input","result","flex_heading","Heading Background","backgroundColor");
}
function fontChange()
{
   VarIn("font_color_input","result","flex_box","Font Color","color");
}
function fontBgColor()
{
   VarIn("font_bg_color_input","result","flex_box","Font Background", "backgroundColor");
}
