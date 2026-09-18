# Interactive Profile Card (Homework Modul 2)

Aplikasi web profil interaktif yang dibangun menggunakan HTML, CSS, dan Vanilla JavaScript murni tanpa library atau framework luar.

## Fitur Aplikasi
1. **Asynchronous Data Loading:** Memuat informasi profil dan daftar keterampilan awal dari file lokal `data/profile.json`.
2. **State Management UI:** Mendukung status `loading`, `success`, `error`, dan `empty` jika data keterampilan kosong.
3. **Mekanisme Coba Lagi:** Tombol *Coba Lagi* muncul secara otomatis saat terjadi kesalahan fetch atau HTTP error.
4. **Detail Toggle & Aksesibilitas:** Menampilkan dan menyembunyikan bio menggunakan manipulasi atribut `aria-expanded`.
5. **Theme Switcher:** Fitur ganti tema (Light Mode & Dark Mode) menggunakan mekanisme `classList.toggle`.
6. **Manajemen Keterampilan:** Form validasi penambahan keterampilan dan tombol hapus individual untuk setiap item.
7. **Pencegahan Duplikasi:** Menggunakan `replaceChildren()` sehingga data tidak terduplikasi saat re-render.

## Cara Menjalankan Menggunakan Local Development Server

Karena aplikasi membaca file data JSON lokal menggunakan API `fetch()`, halaman harus dijalankan melalui server lokal (bukan dibuka langsung dengan double-click `file://`).

### Menggunakan VS Code Live Server
1. Pasang ekstensi **Live Server** pada VS Code jika belum terpasang.
2. Klik kanan pada file `index.html`.
3. Pilih opsi **Open with Live Server**.
4. Browser akan terbuka otomatis di alamat `http://127.0.0.1:5500`.

### Menggunakan Python (Alternatif)
1. Buka terminal pada folder ini.
2. Jalankan perintah:
   ```bash
   python -m http.server 8000
   ```
3. Buka browser dan akses alamat `http://localhost:8000`.
