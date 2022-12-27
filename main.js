//Form 1 

function fun1(){
  
var uname = document.forms["form1"]["uname"].value;
var pswd = document.forms["form1"]["pswd"].value;

if (uname == null || uname == ""){
  document.getElementById('err').innerHTML = 'Enter your name';
  return false;
}

if (pswd == null || pswd == "") {
  document.getElementById('err').innerHTML = 'Enter your password';
  return false;
}

if (uname != '' && pswd != '') {
  alert('Login Successfull');
}
}

//Form 2

function fun2(){
  var uname1 = document.forms["form2"]["uname1"].value;
  var num = document.forms["form2"]["num"].value;
  var email = document.forms["form2"]["email"].value;
  var pswd1 = document.forms["form2"]["pswd1"].value;
  var pswd2 = document.forms["form2"]["pswd2"].value;
  
  if (uname1 == null || uname1 == ""){
    document.getElementById("err").innerHTML = "Enter your name";
    return false;
  }
  
  if (num == null || num == ""){
    document.getElementById("err").innerHTML = "Enter mobile number";
    return false;
  }
  
  if (email == null || email == ""){
    document.getElementById("err").innerHTML = "Enter email id";
    return false;
  }
  
  if (pswd1 == null || pswd1 == ""){
    document.getElementById("err").innerHTML = "Enter password";
    return false;
  }
   
  if (pswd2 == null || pswd2 == ""){
    document.getElementById("err").innerHTML = "Enter confirm password";
    return false;
  }
  
  if ( pswd1 != pswd2){
    document.getElementById("err").innerHTML = "Password does not match";
    return false;
  }
  
 alert("Register Successfully");
}
