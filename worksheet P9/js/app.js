// Lembar B – Data profil sebagai variabel & objek
const profil = {
  nama: "Daffa Rendy Prameswara",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript", "Python"]
};

const jumlahProyek = 3;

// Template literal contoh
const kalimat = `Nama saya ${profil.nama}, dan saya memiliki ${jumlahProyek} proyek unggulan.`;
console.log(kalimat);

// Lembar C – Dua fungsi murni
// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" • ");

// Uji coba pemanggilan fungsi ke Console
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// ===================================================
// Lembar D – Struktur data dan array methods
// ===================================================
// Tambahkan kata 'export' di bawah ini:
export const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true, kriteria: "all" },
  { judul: "Katalog Produk", tahun: 2026, selesai: false, kriteria: "proyek" },
  { judul: "Sistem Informasi Katering", tahun: 2026, selesai: true, kriteria: "proyek" }
];

// Pemeriksaan data di Console
console.table(profil.keahlian);
console.table(daftarProyek);

// Menggunakan filter untuk proyek yang sudah selesai
const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

// Menggunakan find untuk mencari proyek tertentu
const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);