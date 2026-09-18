'use strict';

const tombolMuat = document.querySelector('#muat-data');
const tombolCobaLagi = document.querySelector('#coba-lagi');
const status = document.querySelector('#status');
const kontenKutipan = document.querySelector('#konten-kutipan');

function tampilkanState(state, pesan) {
  status.dataset.state = state;
  status.textContent = pesan;
  tombolCobaLagi.hidden = state !== 'error';
}

function tunggu(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function renderKutipan(item) {
  kontenKutipan.replaceChildren();

  const article = document.createElement('article');
  article.classList.add('quote-card');

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = `"${item.kutipan}"`;

  const cite = document.createElement('cite');
  cite.textContent = `— ${item.penulis}`;

  article.append(blockquote, cite);
  kontenKutipan.append(article);
}

async function ambilData() {
  const response = await fetch('data/quotes.json');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

async function muatKutipan() {
  tombolMuat.disabled = true;
  tombolMuat.textContent = 'Memuat...';
  tombolMuat.setAttribute('aria-busy', 'true');
  tampilkanState('loading', 'Sedang mengambil kutipan acak...');

  try {
    const delay = Math.floor(Math.random() * 1000) + 500;
    await tunggu(delay);

    if (Math.random() < 0.3) {
      throw new Error('Simulasi kegagalan server (peluang 30%).');
    }

    const data = await ambilData();

    if (!Array.isArray(data) || data.length === 0) {
      kontenKutipan.replaceChildren();
      tampilkanState('empty', 'Tidak ada kutipan yang tersedia.');
      return;
    }

    const itemAcak = data[Math.floor(Math.random() * data.length)];
    renderKutipan(itemAcak);
    tampilkanState('success', 'Kutipan berhasil dimuat.');
  } catch (error) {
    kontenKutipan.replaceChildren();
    tampilkanState('error', `Gagal: ${error.message}`);
  } finally {
    tombolMuat.disabled = false;
    tombolMuat.textContent = 'Muat Data';
    tombolMuat.removeAttribute('aria-busy');
  }
}

tombolMuat.addEventListener('click', muatKutipan);
tombolCobaLagi.addEventListener('click', muatKutipan);
