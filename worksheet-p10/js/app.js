// js/app.js
import { fetchNews } from './api.js';

// Ambil kontainer tempat kartu berita/film API akan ditampilkan
const container = document.querySelector('#api-news-list');

// 1. Loading State
function showLoading() {
  if (container) {
    container.textContent = 'Memuat data dari API, harap tunggu...';
  }
}

// 2. Success State & Empty State
function render(list) {
  if (!container) return;
  container.textContent = ''; // Kosongkan container sebelum merender

  // 4. Empty State (jika data kosong)
  if (!list || list.length === 0) {
    container.textContent = 'Belum ada data berita/film yang tersedia.';
    return;
  }

  // Success State (render data menjadi elemen kartu)
  list.slice(0, 6).forEach(function (item) {
    const card = document.createElement('article');
    card.className = 'card';
    card.style.border = '1px solid #ccc';
    card.style.padding = '1rem';
    card.style.marginBottom = '1rem';
    card.style.borderRadius = '8px';

    const heading = document.createElement('h3');
    heading.textContent = item.title; // Gunakan textContent agar aman dari XSS

    const paragraph = document.createElement('p');
    paragraph.textContent = item.body || '';

    card.appendChild(heading);
    card.appendChild(paragraph);
    container.appendChild(card);
  });
}

// 3. Failure State
function showError(message) {
  if (container) {
    container.textContent = 'Gagal memuat data dari API: ' + message;
  }
}

// Jalankan Alur Utama
async function init() {
  showLoading();
  try {
    const data = await fetchNews();
    render(data);
  } catch (error) {
    showError(error.message);
  }
}

init();