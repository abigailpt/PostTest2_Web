if (localStorage.getItem('loggedIn') != null){
    document.getElementById("sapa_user").innerHTML = 'Hello ' + localStorage.getItem('loggedIn');
}


const form = document.getElementById("form");
const username = document.getElementById("username");
const pass = document.getElementById("password");

function signin() {
  // const loc_username = localStorage.getItem("username");
  // const loc_password = localStorage.getItem("password");

  // if (username.value == loc_username && pass.value == loc_password) {
  //   alert("Berhasil login");
  //   window.location.href = "beranda.html"
  // } else {
  //   alert("Username atau Password salah");
  // }
  const usnInput = document.getElementById("username").value;
  const pswInput = document.getElementById("password").value;
  
  const username = JSON.parse(localStorage.getItem("username")) || [];
  const password = JSON.parse(localStorage.getItem("password")) || [];
  
  if (usnInput == ""){
      alert ("Please fill the username") ;
  }
  else if (pswInput == ""){
      alert ("Please fill the Password") ;
  } 
  else if (username.includes(usnInput)){
      if (username.indexOf(usnInput) == password.indexOf(pswInput)) {
          alert("Welcome "+ usnInput)
          localStorage.setItem("loggedIn", (usnInput))
          document.getElementById("signin").href = "beranda.html"
          localStorage.setItem("indexAcc", (username.indexOf(usnInput)))
      }
      else if (username.indexOf(usnInput) != password.indexOf(pswInput)){
          alert("Invalid username or password")
      }
      else{
          alert ("Invalid username or password")
      }    
  }
  else{
      alert ("Invalid username or Password");
  }
}
