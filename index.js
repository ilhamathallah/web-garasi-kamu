const navbar = document.getElementById('navbar');

// Fungsi untuk memantau scroll
window.onscroll = function () {
  // Jika pengguna menggulir lebih dari 500px, tampilkan navbar
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
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

const contentIdentity = document.getElementById('content_identity');
const items = Array.from(contentIdentity.children);
const speed = 0.3; // Kecepatan animasi, semakin besar semakin cepat

let scrollAmount = 0;

function animate() {
  scrollAmount += speed;

  if (scrollAmount >= items[0].offsetWidth) {
    contentIdentity.appendChild(items[0]); // Pindahkan elemen pertama ke akhir
    scrollAmount = 0; // Reset scroll amount
  }

  contentIdentity.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(animate);
}

animate();

// ========================================================= carousel
const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let scrollPosition = 0;

prevButton.addEventListener("click", () => {
  const cardWidth = document.querySelector(".w-full").offsetWidth;
  scrollPosition -= cardWidth;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
});

nextButton.addEventListener("click", () => {
  const cardWidth = document.querySelector(".w-full").offsetWidth;
  const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
  scrollPosition += cardWidth;
  if (scrollPosition > maxScroll) {
    scrollPosition = maxScroll;
  }
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
});

prevButton.addEventListener("click", () => {
  console.log("Prev button clicked");
});

nextButton.addEventListener("click", () => {
  console.log("Next button clicked");
});
