"use strict";

function hitungDiskon(subtotal, isMember) {
  let diskon = 0;

  if (subtotal >= 200000) {
    diskon = 0.2;
  } else if (subtotal >= 100000) {
    diskon = 0.1;
  }

  if (isMember === true) {
    diskon = diskon + 0.05;
  }

  if (diskon > 0.25) {
    diskon = 0.25;
  }

  return diskon;
}

function prosesPembayaran(harga, jumlah, isMember) {
  console.log("Kasus Uji");
  console.log("Harga:", harga, "| Jumlah:", jumlah, "| Member:", isMember);

  if (harga <= 0 || jumlah <= 0) {
    console.log("Status: Input tidak valid");
    return;
  }

  const subtotal = harga * jumlah;
  const diskon = hitungDiskon(subtotal, isMember);
  const potongan = subtotal * diskon;
  const total = subtotal - potongan;

  console.log("Subtotal: Rp" + subtotal);
  console.log("Diskon: " + Math.round(diskon * 100) + "%");
  console.log("Total Bayar: Rp" + total);
}

prosesPembayaran(25000, 2, false);
prosesPembayaran(50000, 2, true);
prosesPembayaran(100000, 2, true);
prosesPembayaran(250000, 1, true);
prosesPembayaran(-10000, 2, false);
