form()
function form(){
    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const umur = JSON.parse(sessionStorage.getItem("umur")) || [];
    const keluhan = JSON.parse(sessionStorage.getItem("keluhan")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const telp = JSON.parse(sessionStorage.getItem("telp")) || [];
    const jenis_konsul = JSON.parse(sessionStorage.getItem("jenis_konsul")) || [];
    const kelamin = JSON.parse(sessionStorage.getItem("kelamin")) || [];
    
    // const indexAcc = localStorage.getItem("indexAcc");

    const inputNama = document.getElementById('bio_nama');
    const inputUmur = document.getElementById('bio_umur');
    const inputKeluhan = document.getElementById('bio_keluhan');
    const inputEmail = document.getElementById('bio_email');
    const inputTelp = document.getElementById('bio_telp');
    const inputJenis_konsul = document.getElementById('bio_jenis_konsul');
    const inputKelamin = document.getElementById('bio_kelamin');

    inputNama.innerHTML         ="Nama          : " + nama;
    inputUmur.innerHTML         ="Umur          : " + umur;
    inputKeluhan.innerHTML      ="Keluhan       : " + keluhan;
    inputEmail.innerHTML        ="Email         : " + email;
    inputTelp.innerHTML         ="Telp/WhatsApp : " + telp;
    inputJenis_konsul.innerHTML ="Jenis Keluhan : " + jenis_konsul;
    inputKelamin.innerHTML      ="Jenis Kelamin : " + kelamin;

    }