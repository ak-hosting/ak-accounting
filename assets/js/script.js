const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
const header = document.querySelector("[data-header]");
const scopeForm = document.querySelector("[data-scope-form]");
const scopeResult = document.querySelector("[data-scope-result]");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });
}

function updateHeader() {
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 18);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const stageLabels = {
  kurulus: "kuruluş kontrol listesi",
  aktif: "dönem görev haritası",
  buyume: "rol ve onay akışı"
};

const priorityLabels = {
  kayit: "belge ve kayıt düzeni",
  bordro: "bordro süreci",
  rapor: "yönetim raporlaması"
};

if (scopeForm && scopeResult) {
  scopeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const stage = scopeForm.elements.businessStage.value;
    const priority = scopeForm.elements.priority.value;

    if (!stage || !priority) {
      scopeResult.hidden = false;
      scopeResult.textContent = "İki seçimi de tamamlayın. Bu demo kişisel veri istemez.";
      scopeResult.focus();
      return;
    }

    scopeResult.hidden = false;
    scopeResult.textContent = `Demo başlangıç noktası: ${stageLabels[stage]} ile ${priorityLabels[priority]} birlikte ele alınabilir. Bu sonuç yalnızca tarayıcıda üretildi; hiçbir veri gönderilmedi veya saklanmadı.`;
    scopeResult.focus();
  });
}
