function daftar() {
  const requsername = document.getElementById("regusername");
  const reqpassword = document.getElementById("regpassword");
  const reqcpassword = document.getElementById("regcpassword");
  const reqemail = document.getElementById("regemail");

  const username = JSON.parse(localStorage.getItem("username")) || [];
  const password = JSON.parse(localStorage.getItem("password")) || [];
  const email = JSON.parse(localStorage.getItem("email")) || [];
    
  if (username.includes(requsername.value)){
    alert("Username Already Exist !")
  }
  if (reqpassword.value != reqcpassword.value ){
    alert("Confirm Password is Wrong!")
  }
  else{
      // Push username dan password ke dalam local storage
      username.push(requsername.value);
      localStorage.setItem("username", JSON.stringify(username));
      
      password.push(reqpassword.value);
      localStorage.setItem("password", JSON.stringify(password));
      
      //  Session Storage
      email.push(reqemail.value);
      sessionStorage.setItem("email", JSON.stringify(email));
      
      window.location.href = "index.html"
      document.getElementById("daftar").href = "index.html"
      // document.getElementById("submit").href="index.html"
      alert("berhasil daftar");
  }
}

  // localStorage.setItem("username", requsername.value);
  // localStorage.setItem("password", reqpassword.value);
  // localStorage.setItem("password", reqcpassword.value);
  // localStorage.setItem("email", reqemail.value);