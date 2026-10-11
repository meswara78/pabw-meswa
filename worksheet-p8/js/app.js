// ==========================================
// LEMBAR B — Data Halaman sebagai Variabel
// ==========================================

// Variabel data identitas (menggunakan const & let)
const namaLengkap = "Daffa Rendy Prameswara";
const nim = "25523198";
const kelas = "C";
let filmFavoritAktif = "Inception";

// Objek data profil
const profil = {
  nama: namaLengkap,
  nim: nim,
  kelas: kelas,
  peran: "Penggemar Film & Mahasiswa Informatika",
  genreFavorit: ["Sci-Fi", "Action", "Drama", "Thriller"],
  kontak: {
    email: "daffa@example.com"
  }
};

// Menggunakan Template Literal
const kalimatProfil = `Halo, saya ${profil.nama} (${profil.nim}) dari kelas ${profil.kelas}.`;
console.log(kalimatProfil);

// Menggunakan Optional Chaining (?.) dan Nullish Coalescing (??)
const kota = profil.alamat?.kota ?? "Kota belum diisi";
console.log(`Kota asal: ${kota}`);


// ==========================================
// LEMBAR C — Dua Fungsi Murni (Pure Functions)
// ==========================================

// Fungsi 1: Menyusun kalimat perkenalan dari objek profil
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi 2: Merapikan daftar genre/keahlian menjadi satu baris teks
const formatGenre = (daftar) => daftar.join(" · ");

// Uji coba fungsi murni di Console
console.log("Perkenalan:", buatPerkenalan(profil));
console.log("Genre Favorit:", formatGenre(profil.genreFavorit));


// ==========================================
// LEMBAR D — Data Array of Objects & Array Methods
// ==========================================

// Array of Objects: Daftar Film
const daftarFilm = [
  { id: 1, judul: "Inception", tahun: 2010, rating: 8.8, selesai: true },
  { id: 2, judul: "Interstellar", tahun: 2014, rating: 8.7, selesai: true },
  { id: 3, judul: "Oppenheimer", tahun: 2023, rating: 8.9, selesai: true },
  { id: 4, judul: "Dune: Part Two", tahun: 2024, rating: 8.6, selesai: false }
];

// Tampilkan data sebagai tabel di Console
console.log("--- Seluruh Daftar Film ---");
console.table(daftarFilm);

// 1. Array Method FILTER: Filter film yang ratingnya >= 8.7
const filmBagus = daftarFilm.filter((film) => film.rating >= 8.7);
console.log("--- Film Rating High (>= 8.7) ---");
console.table(filmBagus);

// 2. Array Method FIND: Cari film berjudul "Interstellar"
const filmCari = daftarFilm.find((film) => film.judul === "Interstellar");
console.log("--- Hasil Cari Film Interstellar ---");
console.log(filmCari);

// 3. Array Method MAP: Membuat ringkasan judul dan rating
const ringkasanFilm = daftarFilm.map((film) => `${film.judul} (${film.tahun}) - Rating: ${film.rating}`);
console.log("--- Ringkasan Film ---");
console.log(ringkasanFilm);