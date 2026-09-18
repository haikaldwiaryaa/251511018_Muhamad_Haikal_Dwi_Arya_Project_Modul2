"use strict";

const statusProfil = document.querySelector("#status-profil");
const tombolCobaLagi = document.querySelector("#coba-lagi");
const profileCard = document.querySelector("#profile-card");
const profileNama = document.querySelector("#profile-nama");
const profilePeran = document.querySelector("#profile-peran");
const profileBio = document.querySelector("#profile-bio");
const profileDetail = document.querySelector("#profile-detail");
const toggleDetail = document.querySelector("#toggle-detail");
const toggleTema = document.querySelector("#toggle-tema");
const skillsList = document.querySelector("#skills-list");
const skillsEmpty = document.querySelector("#skills-empty");
const formSkill = document.querySelector("#form-skill");
const inputSkill = document.querySelector("#input-skill");
const errorSkill = document.querySelector("#error-skill");

let dataKeterampilan = [];

function aturState(state, pesan) {
  statusProfil.dataset.state = state;
  statusProfil.textContent = pesan;

  if (state === "loading") {
    statusProfil.hidden = false;
    profileCard.hidden = true;
    tombolCobaLagi.hidden = true;
  } else if (state === "success") {
    statusProfil.hidden = true;
    profileCard.hidden = false;
    tombolCobaLagi.hidden = true;
  } else if (state === "error") {
    statusProfil.hidden = false;
    profileCard.hidden = true;
    tombolCobaLagi.hidden = false;
  }
}

function renderSkills() {
  skillsList.replaceChildren();

  if (dataKeterampilan.length === 0) {
    skillsEmpty.hidden = false;
    return;
  }

  skillsEmpty.hidden = true;

  dataKeterampilan.forEach((skill, index) => {
    const li = document.createElement("li");
    li.classList.add("skill-item");

    const span = document.createElement("span");
    span.textContent = skill;

    const btnHapus = document.createElement("button");
    btnHapus.type = "button";
    btnHapus.classList.add("btn-hapus");
    btnHapus.textContent = "×";
    btnHapus.setAttribute("aria-label", `Hapus keterampilan ${skill}`);

    btnHapus.addEventListener("click", () => {
      dataKeterampilan.splice(index, 1);
      renderSkills();
    });

    li.append(span, btnHapus);
    skillsList.append(li);
  });
}

async function muatProfil() {
  aturState("loading", "Memuat profil...");

  try {
    const response = await fetch("data/profile.json");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    profileNama.textContent = data.nama;
    profilePeran.textContent = data.peran;
    profileBio.textContent = data.bio;

    dataKeterampilan = Array.isArray(data.keterampilan)
      ? [...data.keterampilan]
      : [];
    renderSkills();

    aturState("success", "");
  } catch (error) {
    aturState("error", `Gagal memuat profil: ${error.message}`);
  }
}

toggleDetail.addEventListener("click", () => {
  const isExpanded = toggleDetail.getAttribute("aria-expanded") === "true";
  const newStatus = !isExpanded;

  toggleDetail.setAttribute("aria-expanded", String(newStatus));
  profileDetail.hidden = !newStatus;
  toggleDetail.textContent = newStatus ? "Tutup Detail" : "Lihat Detail";
});

toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

formSkill.addEventListener("submit", (event) => {
  event.preventDefault();

  const nilai = inputSkill.value.trim();

  if (nilai === "") {
    errorSkill.textContent = "Keterampilan tidak boleh kosong.";
    inputSkill.setAttribute("aria-invalid", "true");
    return;
  }

  errorSkill.textContent = "";
  inputSkill.removeAttribute("aria-invalid");

  dataKeterampilan.push(nilai);
  renderSkills();

  inputSkill.value = "";
});

tombolCobaLagi.addEventListener("click", muatProfil);

muatProfil();
