// js/api.js
// 1. Alamat API ditentukan di satu tempat di bagian atas file
const URL = 'https://jsonplaceholder.typicode.com/posts';

// 2. Fungsi dipisah dan diekspor agar bisa dipanggil oleh app.js
export async function fetchNews() {
  try {
    const response = await fetch(URL);
    
    // Periksa response.ok sebelum membaca isi body
    if (!response.ok) {
      throw new Error('Gagal mengambil data. Status: ' + response.status);
    }
    
    // Membaca respon JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan pada api.js:', error.message);
    throw error;
  }
}