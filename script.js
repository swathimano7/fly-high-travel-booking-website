
function showMessage(){
alert("More travel details coming soon!");
}
function readMore(){
alert("Full travel story coming soon!");
}
function openImage(img){
document.getElementById("imagePopup").style.display="flex";
document.getElementById("popupImg").src=img.src;
}

function closeImage(){
document.getElementById("imagePopup").style.display="none";
}
function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name=="" || email=="" || message==""){
alert("Please fill all fields");
return false;
}

alert("Message sent successfully!");

return true;
}
function loginUser(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username=="" || password==""){
alert("Please enter username and password");
return false;
}

alert("Login successful!");
return true;
}