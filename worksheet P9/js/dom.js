// Import variabel 'daftarProyek' yang sudah di-export dari app.js
import { daftarProyek } from "./app.js";

// 1. SELECT ELEMEN
const container = document.querySelector("#list");
const empty = document.querySelector("#empty-message");
const filterRow = document.querySelector("#filter");
const form = document.querySelector("#contact-form");

// 2. RENDER DAFTAR KARTU
function buildCard(proyek) {
  const li = document.createElement("li");
  li.className = "card";
  li.textContent = proyek.judul; // Membaca properti 'judul' dari app.js
  return li;
}

export function render(list) {
  if (container) {
    container.textContent = ""; // Bersihkan kontainer terlebih dahulu

    if (!list || list.length === 0) {
      if (empty) empty.hidden = false;
      return;
    }

    if (empty) empty.hidden = true;

    list.forEach((proyek) => {
      container.append(buildCard(proyek));
    });
  }
}

// Render awal
if (Array.isArray(daftarProyek)) {
  render(daftarProyek);
}

// 3. EVENT DELEGATION FILTER
if (filterRow) {
  filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    document.querySelectorAll("#filter button").forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    const category = button.dataset.category;
    const selected = daftarProyek.filter(
      (proyek) => category === "all" || proyek.kriteria === category
    );

    render(selected);
  });
}

// 4. VALIDASI FORM
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop reload

    const judulInput = document.querySelector("#judul-film");
    const tahunInput = document.querySelector("#tahun-rilis");
    const ratingInput = document.querySelector("#rating-film");

    const judulError = document.querySelector("#judul-error");
    const tahunError = document.querySelector("#tahun-error");
    const ratingError = document.querySelector("#rating-error");

    let isValid = true;

    if (!judulInput.value.trim()) {
      judulInput.setAttribute("aria-invalid", "true");
      if (judulError) judulError.textContent = "Judul tidak boleh kosong!";
      isValid = false;
    } else {
      judulInput.removeAttribute("aria-invalid");
      if (judulError) judulError.textContent = "";
    }

    if (!tahunInput.value.trim()) {
      tahunInput.setAttribute("aria-invalid", "true");
      if (tahunError) tahunError.textContent = "Tahun wajib diisi!";
      isValid = false;
    } else {
      tahunInput.removeAttribute("aria-invalid");
      if (tahunError) tahunError.textContent = "";
    }

    if (!ratingInput.value.trim()) {
      ratingInput.setAttribute("aria-invalid", "true");
      if (ratingError) ratingError.textContent = "Rating wajib diisi!";
      isValid = false;
    } else {
      ratingInput.removeAttribute("aria-invalid");
      if (ratingError) ratingError.textContent = "";
    }

    if (isValid) {
      alert("Data berhasil disimpan!");
      form.reset();
    }
  });
}