//    let passwordVer =false;
//    let emailVer =false;

function passwordCheck()
{
    let errorMessage= "The password that you've entered is incorrect Forgotten password?";

    let userPassword= document.getElementById("ID-password-input").value;
    let userPasswordError = document.getElementById("password-error-message");
    if(userPassword === ""  )
    {
    //    || userPassword !== "12345678"
        userPasswordError.innerHTML =errorMessage;
        userEmailError.innerHTML ="";
    }
    else
   {
     userPasswordError.innerHTML="password else"
   }
}
function emailCheck()
{
    let errorMessage=  "The email address or mobile number you entered isn't connected to an account. Find your account and log in."
    let userEmail= document.getElementById("ID-email-input").value;
    let userEmailError = document.getElementById("email-error-message");
    
    if(userEmail === ""  )
    {
        userEmailError.innerHTML ="inside email" + errorMessage ;
        userPasswordError.innerHTML=""
        
    }
    else if(!userEmail.includes("@"))
   {
    userEmailError.innerHTML ="in the @" + errorMessage ;
   }
   else {
    userEmailError.innerHTML ="include @"
   }
}
function bothCheck()
{      
    let errorMessagePass= "The password that you've entered is incorrect Forgotten password?";
    let errorMessageEmail=  "The email address or mobile number you entered isn't connected to an account. Find your account and log in."

     emailValue =document.getElementById("ID-email-input");
     passwordValue =document.getElementById("ID-password-input");
     userEmailError = 
     document.getElementById("email-error-message");
     userPasswordError = 
     document.getElementById("password-error-message");

    if(emailValue !== "" && passwordValue !== "")
    {  
        emailCheck();
        passwordCheck();
        console.log("Main if");
    }
    else if(emailValue === "" && passwordValue ==="")
     {
        userEmailError.innerHTML="end email" + errorMessageEmail;
        userPasswordError.innerHTML="end pass" + errorMessagePass;
    }
  
}