# Mini Project: Landing Page Interaktif Lokakarya Web Dasar 2026

Proyek ini merupakan pengembangan dari landing page statis Modul 1 menjadi landing page interaktif berbasis vanilla JavaScript untuk memenuhi tugas Modul 2 mata kuliah Proyek 3 - Pengembangan Perangkat Lunak Berbasis Web, Program Studi D3 Teknik Informatika.

## Identitas Pengembang
- **Nama:** Muhamad Haikal Dwi Arya
- **NIM:** 251511018
- **Kelas:** D3 Teknik Informatika

## Batasan Teknis
- Murni menggunakan HTML5 semantik, CSS modern, dan vanilla JavaScript tanpa pustaka atau framework tambahan.
- File JavaScript dimuat secara eksternal menggunakan atribut `defer`.
- Sesuai instruksi Modul 2 Bagian 4.3, mini project belum menggunakan `fetch`, `Promise`, atau `async/await` (asynchronous dinilai pada Task 3 dan Homework).
- Tidak menggunakan inline event handler (seperti `onclick`).
- Tidak menggunakan `innerHTML` untuk memasukkan input dari pengguna demi keamanan.
- Semua interaksi dapat diakses melalui keyboard.

## Fitur Interaktif
1. **Navigasi Mobile Responsif:** Menu navigasi dapat dibuka dan ditutup melalui tombol toggle serta sinkron dengan atribut `aria-expanded`.
2. **Render Fitur Dinamis:** Daftar materi lokakarya dirender secara dinamis dari array of objects tanpa duplikasi saat render ulang.
3. **Filter Kategori:** Pengguna dapat menyaring daftar materi berdasarkan kategori ("Semua", "Dasar", "Lanjutan") dengan penanganan kondisi kosong.
4. **FAQ Accordion:** Pertanyaan dan jawaban interaktif dengan state tunggal terbuka (single-open) dan pembaruan atribut `aria-expanded`.
5. **Formulir Pendaftaran & Validasi:** Form interaktif dengan validasi format input di sisi klien, penanda `aria-invalid`, serta kotak ringkasan sukses yang aman.
6. **Tombol Kembali ke Atas (Back to Top):** Tombol mengambang yang muncul setelah batas scroll tertentu dengan pergerakan halaman halus (*smooth scroll*).
7. **Toggle Tema (Dark Mode):** Pengalihan tema gelap dan terang berbasis class CSS pada elemen `body` dengan kontras teks yang tetap terjaga.

## Struktur Direktori
```text
mini-project/
├── assets/
│   └── kampus.jpg
├── css/
│   └── style.css
├── js/
│   └── app.js
├── index.html
└── README.md
```

## Cara Menjalankan
1. Buka folder `mini-project`.
2. Buka file `index.html` menggunakan peramban web (seperti Google Chrome atau Mozilla Firefox), atau jalankan melalui ekstensi Live Server di Visual Studio Code.
