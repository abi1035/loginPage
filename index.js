function passwordCheck(){
    let userPassword=document.getElementById("userPassword").value
    let passwordLength=document.getElementById("originalPassword")
    if(userPassword.length<8){
        passwordLength.innerHTML="Password must be atleast 8 characters"
    }else{
        passwordLength.innerHTML=""

    }
}


function confirmCheck(){
    // console.log("I was triggered");
    let userPassword=document.getElementById("userPassword").value
    let validatePassword=document.getElementById("confirm_Password").value
    if(userPassword===validatePassword){
        document.getElementById("validatePassword").innerHTML="";
    }else{
        document.getElementById("validatePassword").innerHTML="Password does not match";
    }
}