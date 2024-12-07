const navbar = document.getElementById('navbar');

// Fungsi untuk memantau scroll
window.onscroll = function () {
  // Jika pengguna menggulir lebih dari 50px, tampilkan navbar
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
};

// =======================
const texts = [
  "Sahabat Sejati Liburanmu",
  "Motor Impian Menantimu",
  "Perjalanan Nyaman Dengan Garasi Kamu",
  "Jelajahi Solo tanpa Batas"
];

let currentTextIndex = 0;
let currentCharIndex = 0;
const element = document.getElementById("typing-text");

function typeText() {
  if (currentCharIndex < texts[currentTextIndex].length) {
    element.textContent += texts[currentTextIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typeText, 100); // Ketik tiap 100ms
  } else {
    // Setelah selesai mengetik, mulai menghapus teks
    setTimeout(() => {
      eraseText();
    }, 1000); // Tunggu 1 detik setelah mengetik selesai
  }
}

function eraseText() {
  if (currentCharIndex > 0) {
    element.textContent = element.textContent.slice(0, -1);
    currentCharIndex--;
    setTimeout(eraseText, 50); // Hapus tiap 50ms
  } else {
    // Setelah teks dihapus, pindah ke teks berikutnya
    currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop ke teks berikutnya
    setTimeout(typeText, 500); // Tunggu setengah detik sebelum mulai mengetik lagi
  }
}

// Mulai typing text saat halaman dimuat
typeText();

// ===================
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Fungsi untuk menampilkan item berikutnya
function showNextItem() {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Kembali ke awal jika sudah sampai akhir
  }
  updateCarousel();
}

// Fungsi untuk menampilkan item sebelumnya
function showPrevItem() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselItems.length - 1; // Kembali ke akhir jika sudah di awal
  }
  updateCarousel();
}

// Fungsi untuk memperbarui posisi carousel
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.style.transform = `translateX(-${currentIndex * 100}%)`; // Geser carousel sesuai index
  });
}

// Event listener untuk tombol navigasi
prevBtn.addEventListener('click', showPrevItem);
nextBtn.addEventListener('click', showNextItem);

// Untuk otomatis bergerak setiap 5 detik
setInterval(showNextItem, 5000);

// ========================================================== navbar
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle the mobile menu visibility when the hamburger button is clicked
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-x-full');
});
