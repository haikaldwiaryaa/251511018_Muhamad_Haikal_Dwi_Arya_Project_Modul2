'use strict';

const peserta = [
  { id: 1, nama: 'Alya', prodi: 'Teknik Informatika' },
  { id: 2, nama: 'Bima', prodi: 'Sistem Informasi' }
];

const form = document.querySelector('#form-peserta');
const namaInput = document.querySelector('#nama');
const prodiInput = document.querySelector('#prodi');
const filterInput = document.querySelector('#filter-prodi');
const daftar = document.querySelector('#daftar-peserta');
const status = document.querySelector('#status');
const errorNama = document.querySelector('#error-nama');
const errorProdi = document.querySelector('#error-prodi');

function validasiPeserta(calon) {
  const hasil = {
    valid: true,
    errorNama: '',
    errorProdi: ''
  };

  const namaBersih = calon.nama.trim();

  if (namaBersih === '') {
    hasil.valid = false;
    hasil.errorNama = 'Nama peserta wajib diisi.';
  } else if (namaBersih.length < 3) {
    hasil.valid = false;
    hasil.errorNama = 'Nama minimal 3 karakter.';
  }

  if (!calon.prodi) {
    hasil.valid = false;
    hasil.errorProdi = 'Program studi wajib dipilih.';
  }

  return hasil;
}

function buatKartuPeserta(item) {
  const article = document.createElement('article');
  article.classList.add('kartu');

  const h2 = document.createElement('h2');
  h2.textContent = item.nama;

  const p = document.createElement('p');
  p.textContent = item.prodi;

  article.append(h2, p);
  return article;
}

function renderPeserta(data) {
  daftar.replaceChildren();

  if (data.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'Tidak ada peserta';
    daftar.append(p);
    return;
  }

  for (const item of data) {
    daftar.append(buatKartuPeserta(item));
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const calon = {
    nama: namaInput.value,
    prodi: prodiInput.value
  };

  const hasilValidasi = validasiPeserta(calon);

  errorNama.textContent = hasilValidasi.errorNama;
  namaInput.setAttribute('aria-invalid', String(!hasilValidasi.valid && !!hasilValidasi.errorNama));

  errorProdi.textContent = hasilValidasi.errorProdi;
  prodiInput.setAttribute('aria-invalid', String(!hasilValidasi.valid && !!hasilValidasi.errorProdi));

  if (!hasilValidasi.valid) {
    return;
  }

  const pesertaBaru = {
    id: Date.now(),
    nama: calon.nama.trim(),
    prodi: calon.prodi
  };

  peserta.push(pesertaBaru);

  namaInput.value = '';
  prodiInput.value = '';
  namaInput.removeAttribute('aria-invalid');
  prodiInput.removeAttribute('aria-invalid');
  errorNama.textContent = '';
  errorProdi.textContent = '';

  filterInput.value = 'semua';
  renderPeserta(peserta);
});

filterInput.addEventListener('change', () => {
  const pilihan = filterInput.value;

  if (pilihan === 'semua') {
    renderPeserta(peserta);
  } else {
    const hasilFilter = peserta.filter((p) => p.prodi === pilihan);
    renderPeserta(hasilFilter);
  }
});

renderPeserta(peserta);
