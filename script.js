// Pesan saat website dibuka
window.onload = function () {
    alert("Selamat datang di Website Edukasi Pengelolaan Sampah 🌱");
};


// Fungsi untuk menampilkan tahun otomatis di footer
let tahun = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    "© " + tahun + " Edukasi Pengelolaan Sampah";


// Fungsi tombol informasi sampah
function tampilkanPesan() {
    alert("Mari mulai memilah sampah dari rumah untuk menjaga lingkungan!");
}