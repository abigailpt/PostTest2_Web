function daftar(){
    const input_nama = document.getElementById("nama");
    const input_umur = document.getElementById("umur");
    const input_keluhan = document.getElementById("keluhan");
    const input_email = document.getElementById("email")
    const input_telp = document.getElementById('telp');
    const input_jenis_konsul = document.getElementsByName('konsul');
    const input_kelamin = document.querySelector('input[id="jk"]:checked');

    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const umur = JSON.parse(sessionStorage.getItem("umur")) || [];
    const keluhan = JSON.parse(sessionStorage.getItem("keluhan")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const telp = JSON.parse(sessionStorage.getItem("telp")) || [];
    const jenis_konsul = JSON.parse(sessionStorage.getItem("jenis_konsul")) || [];
    const kelamin = JSON.parse(sessionStorage.getItem("kelamin")) || [];
    // const indexAcc = (sessionStorage.getItem("indexAcc"));
   
    // push nama
    nama.push(input_nama.value);
    sessionStorage.setItem("nama", JSON.stringify(nama))

    // push umur
    umur.push(input_umur.value);
    sessionStorage.setItem("umur", JSON.stringify(umur))

    // push keluhan
    keluhan.push(input_keluhan.value);
    sessionStorage.setItem("keluhan", JSON.stringify(keluhan))

    // push email
    email.push(input_email.value);
    sessionStorage.setItem("email", JSON.stringify(email))


    // push telp
    telp.push(input_telp.value);
    sessionStorage.setItem("telp", JSON.stringify(telp))

    // push jenis konsul
    // cek apa aja yang dicentang pada type checkbox
    for (var i=0; i<input_jenis_konsul.length; i++) {
        if (input_jenis_konsul[i].checked) {
            jenis_konsul.push(input_jenis_konsul[i].value);
        }
    }
    sessionStorage.setItem("jenis_konsul", JSON.stringify(jenis_konsul));

    // push kelamin
    kelamin.push(input_kelamin.value);
    sessionStorage.setItem("kelamin", JSON.stringify(kelamin))
    document.getElementById("submit").href = "../html/biodata.html"

}
