async function jalankanProses() {
  try {
    console.log("Memulai...");
    const pesan = await tunggu(800);
    console.log(pesan);
  } catch (error) {
    console.error("Proses gagal:", error.message);
  } finally {
    console.log("Proses berakhir");
  }
}
jalankanProses();

function tunggu(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Selesai setelah ${ms} ms`), ms);
  });
}
tunggu(800)
  .then((pesan) => console.log(pesan))
  .catch((error) => console.error(error));
async function jalankanProses() {
  try {
    console.log("Memulai...");
    const pesan = await tunggu(800);
    console.log(pesan);
  } catch (error) {
    console.error("Proses gagal:", error.message);
  } finally {
    console.log("Proses berakhir");
  }
}
jalankanProses();
