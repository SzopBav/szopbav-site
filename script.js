const i18n = {
  en: {
    nav_services: "Services",
    nav_why: "Why us",
    nav_contacts: "Contacts",
    hero_title: "Wholesale and Logistics Solutions",
    hero_sub: "Building distribution, optimizing logistics, ensuring payments and deal flow.",
    cta_start: "Start cooperation",
    services_title: "Our Services",
    svc1_title: "Wholesale assortment & payment solutions",
    svc1_text: "Selection of assortment, terms and payment models.",
    svc2_title: "Distribution & logistics",
    svc2_text: "Supply chain design, transport, customs, bonded storage.",
    svc3_title: "Consulting & deal support",
    svc3_text: "Negotiations, contracts, quality control, long-term management.",
    partners_title: "Our Partners",
    partners_caption: "Logos are used for reference to illustrate cooperation capabilities.",
    why_title: "Why us",
    why_text: "We work officially with transparent processes, documentation and compliance. Focus on B2B supply and long-term relations.",
    contacts_title: "Contacts",
    phone_label: "Phone:",
    address_label: "Address:"
  },
  ru: {
    nav_services: "Услуги",
    nav_why: "Почему мы",
    nav_contacts: "Контакты",
    hero_title: "Оптовая торговля и логистические решения",
    hero_sub: "Построение дистрибуции, оптимизация логистики, обеспечение платежей и сопровождение сделок.",
    cta_start: "Начать сотрудничество",
    services_title: "Наши услуги",
    svc1_title: "Оптовый ассортимент и платёжные решения",
    svc1_text: "Подбор ассортимента, условий и моделей оплаты.",
    svc2_title: "Дистрибуция и логистика",
    svc2_text: "Проектирование цепочки поставок, транспорт, таможня, склад под акцизом.",
    svc3_title: "Консалтинг и сопровождение сделок",
    svc3_text: "Переговоры, договоры, контроль качества, долгосрочное ведение.",
    partners_title: "Наши партнёры",
    partners_caption: "Логотипы используются для иллюстрации возможностей сотрудничества.",
    why_title: "Почему мы",
    why_text: "Работаем официально: прозрачные процессы, документы и комплаенс. Фокус на B2B поставках и долгосрочных отношениях.",
    contacts_title: "Контакты",
    phone_label: "Телефон:",
    address_label: "Адрес:"
  }
};

function setLang(lang){
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
  document.documentElement.lang = lang;
  localStorage.setItem("szop_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Init language
  const saved = localStorage.getItem("szop_lang") || "en";
  setLang(saved);

  // Bind language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
});