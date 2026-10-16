# PABW — Daffa Rendy Prameswara — 25523198
## Pertemuan 10 — Asynchronous JavaScript: fetch, Promise, dan JSON

### Topik Halaman
Daftar Film Favorit Saya (Web-Based Application Development)

---

### Deskripsi Tugas
Pada pertemuan ini, dilakukan pembuatan **Data Layer** terpisah pada file `js/api.js` untuk mengambil data dari REST API publik menggunakan `fetch`, `async/await`, dan penanganan error `try/catch`. Hasil data tersebut kemudian dirender pada antarmuka halaman di `profil.html` melalui `js/app.js` dengan penanganan **4 Interface States** (Loading, Success, Failure, dan Empty).

---

### Struktur Berkas (worksheet-p10)
```text
worksheet-p10/
├── profil.html
├── README.md
├── tokens.css
├── base.css
├── layout.css
├── komponen.css
├── tema.css
├── poster-film-avatar.jpeg
└── js/
    ├── api.js      <-- Data Layer (fetch, response.ok check, export)
    ├── app.js      <-- Presentation Layer (render data & 4 states)
    └── dom.js