function checkPassword(){

 let password =
 document.getElementById("password").value;

 let strength =
 document.getElementById("strength");

 let suggestion =
 document.getElementById("suggestion");

 let score = 0;

 if(password.length >= 8){
   score++;
 }

 if(/[A-Z]/.test(password)){
   score++;
 }

 if(/[0-9]/.test(password)){
   score++;
 }

 if(/[!@#$%^&*]/.test(password)){
   score++;
 }

 if(score <= 1){
   strength.innerHTML = "Weak Password";
   document.getElementById("bar").style.width = "30%";
document.getElementById("bar").style.background = "red";
   strength.style.color = "red";
   suggestion.innerHTML =
   "Use uppercase, numbers & symbols";
 }

 else if(score <= 3){
   strength.innerHTML = "Medium Password";
   document.getElementById("bar").style.width = "70%";
document.getElementById("bar").style.background = "orange";
   strength.style.color = "orange";
   suggestion.innerHTML =
   "Add more security";
 }

 else{
   strength.innerHTML = "Strong Password";
   document.getElementById("bar").style.width = "100%";
document.getElementById("bar").style.background = "green";
   strength.style.color = "green";
   suggestion.innerHTML =
   "Your password is secure";
 }

}
function showPassword(){

 let x = document.getElementById("password");

 if(x.type === "password"){
   x.type = "text";
 }

 else{
   x.type = "password";
 }

}