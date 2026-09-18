const featuresData = [
  {
    id: 1,
    title: "Struktur Semantik HTML5",
    category: "dasar",
    desc: "Memahami hierarki dan makna tag HTML5 agar halaman web aksesibel bagi pembaca layar dan optimal untuk SEO."
  },
  {
    id: 2,
    title: "CSS & Flexbox Modern",
    category: "dasar",
    desc: "Menguasai box model, variabel token CSS, dan tata letak responsif multi-device tanpa ketergantungan framework."
  },
  {
    id: 3,
    title: "Code Defense & DevTools",
    category: "lanjutan",
    desc: "Praktik troubleshooting dan debugging langsung menggunakan Chrome DevTools serta pengujian validator W3C."
  },
  {
    id: 4,
    title: "DOM & Interaktivitas Web",
    category: "lanjutan",
    desc: "Mengelola elemen halaman, event listener pengguna, manipulasi class, dan state antarmuka berbasis vanilla JavaScript."
  }
];

function renderFeatures(filterCategory) {
  const container = document.getElementById("cardList");
  if (!container) return;

  container.replaceChildren();

  const filtered = filterCategory === "semua"
    ? featuresData
    : featuresData.filter(item => item.category === filterCategory);

  if (filtered.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-msg";
    emptyMsg.textContent = "Tidak ada materi untuk kategori ini.";
    container.appendChild(emptyMsg);
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "card feature-card";

    const tag = document.createElement("span");
    tag.className = "badge";
    tag.textContent = item.category === "dasar" ? "Dasar" : "Lanjutan";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.textContent = item.desc;

    card.appendChild(tag);
    card.appendChild(title);
    card.appendChild(desc);
    container.appendChild(card);
  });
}

function initFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderFeatures(category);
    });
  });
}

function initNav() {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (!navToggle || !mainNav) return;

  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    mainNav.classList.toggle("is-open", !isExpanded);
  });

  const links = mainNav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    });
  });
}

function initFaq() {
  const buttons = document.querySelectorAll(".faq-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const targetId = btn.getAttribute("aria-controls");
      const targetContent = document.getElementById(targetId);

      buttons.forEach(otherBtn => {
        otherBtn.setAttribute("aria-expanded", "false");
        const otherId = otherBtn.getAttribute("aria-controls");
        const otherContent = document.getElementById(otherId);
        if (otherContent) {
          otherContent.hidden = true;
        }
        const icon = otherBtn.querySelector(".faq-icon");
        if (icon) {
          icon.textContent = "+";
        }
      });

      if (!isExpanded && targetContent) {
        btn.setAttribute("aria-expanded", "true");
        targetContent.hidden = false;
        const icon = btn.querySelector(".faq-icon");
        if (icon) {
          icon.textContent = "-";
        }
      }
    });
  });
}

function initForm() {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const packageSelect = document.getElementById("userPackage");
  const noteInput = document.getElementById("userNote");
  const errorBox = document.getElementById("formError");
  const successBox = document.getElementById("formSuccess");

  if (!form || !nameInput || !emailInput || !packageSelect || !errorBox || !successBox) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    errorBox.hidden = true;
    errorBox.textContent = "";
    successBox.hidden = true;
    successBox.textContent = "";
    nameInput.setAttribute("aria-invalid", "false");
    emailInput.setAttribute("aria-invalid", "false");
    packageSelect.setAttribute("aria-invalid", "false");

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const packageVal = packageSelect.value;

    const errors = [];

    if (nameVal.length < 3) {
      errors.push("Nama lengkap wajib diisi minimal 3 karakter.");
      nameInput.setAttribute("aria-invalid", "true");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailPattern.test(emailVal)) {
      errors.push("Format alamat email tidak valid.");
      emailInput.setAttribute("aria-invalid", "true");
    }

    if (!packageVal) {
      errors.push("Silakan pilih salah satu paket lokakarya.");
      packageSelect.setAttribute("aria-invalid", "true");
    }

    if (errors.length > 0) {
      errorBox.textContent = errors.join(" ");
      errorBox.hidden = false;
      return;
    }

    successBox.replaceChildren();

    const titleP = document.createElement("p");
    titleP.className = "success-title";
    titleP.textContent = "Pendaftaran berhasil dikirim!";

    const detailP = document.createElement("p");
    detailP.textContent = "Terima kasih, " + nameVal + ". Pilihan paket: " + packageVal + ". Informasi rincian pelaksanaan lokakarya telah dikirimkan ke alamat email " + emailVal + ".";

    successBox.appendChild(titleP);
    successBox.appendChild(detailP);
    successBox.hidden = false;

    form.reset();
  });
}

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function initTheme() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    btn.textContent = isDark ? "☀️ Mode Terang" : "🌙 Mode Gelap";
    btn.setAttribute("aria-pressed", String(isDark));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderFeatures("semua");
  initFilter();
  initFaq();
  initForm();
  initBackToTop();
  initTheme();
});
