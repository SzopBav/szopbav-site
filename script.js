
const I18N = {
  en: {
    nav_services: "Services",
    nav_why: "Why us",
    nav_contacts: "Contacts",
    hero_title: "Wholesale and Logistics Solutions",
    hero_sub: "Building distribution, optimizing logistics, ensuring payments and deal flow.",
    hero_cta: "Start cooperation",
    services_title: "Our Services",
    svc1_title: "Wholesale assortment & payment solutions",
    svc1_text: "Selection of assortment, terms and payment models.",
    svc2_title: "Distribution & logistics",
    svc2_text: "Supply chain design, transport, customs, bonded storage.",
    svc3_title: "Consulting & deal support",
    svc3_text: "Negotiations, contracts, quality control, long-term guidance.",
    partners_title: "Our Partners",
    partners_note: "Logos are used for reference to illustrate cooperation capabilities.",
    why_title: "Why us",
    why_text: "We work officially with transparent processes, documentation and compliance. Focus on B2B supply and long-term relations.",
    contacts_title: "Contacts",
    legal_label: "Legal info",
    cta_scroll: "#contacts"
  },
  ru: {
    nav_services: "Услуги",
    nav_why: "Почему мы",
    nav_contacts: "Контакты",
    hero_title: "Оптовая торговля и логистические решения",
    hero_sub: "Построение дистрибуции, оптимизация логистики, обеспечение платежей и сопровождение сделок.",
    hero_cta: "Начать сотрудничество",
    services_title: "Наши услуги",
    svc1_title: "Оптовый ассортимент и платёжные решения",
    svc1_text: "Подбор ассортимента, условий и моделей оплаты.",
    svc2_title: "Дистрибуция и логистика",
    svc2_text: "Проектирование цепочки поставок, транспорт, таможня, хранение.",
    svc3_title: "Консалтинг и сопровождение сделок",
    svc3_text: "Переговоры, договоры, контроль качества, долгосрочное ведение.",
    partners_title: "Наши партнёры",
    partners_note: "Логотипы используются для иллюстрации возможностей сотрудничества.",
    why_title: "Почему мы",
    why_text: "Работаем официально: прозрачные процессы, документы и комплаенс. Фокус на B2B поставках и долгосрочных отношениях.",
    contacts_title: "Контакты",
    legal_label: "Юридическая информация",
    cta_scroll: "#contacts"
  }
};

function setLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  // CTA href
  const cta = document.querySelector('#cta');
  if (cta) cta.setAttribute('href', dict['cta_scroll'] || '#contacts');

  // Toggle active button
  document.querySelectorAll('.lang-switch button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

function initLang() {
  const hash = (location.hash || '').replace('#','').toLowerCase();
  const stored = localStorage.getItem('lang');
  const lang = (hash === 'ru' || hash === 'en') ? hash : (stored || 'en');
  setLang(lang);
}

document.addEventListener('DOMContentLoaded', ()=>{
  initLang();
  document.querySelectorAll('.lang-switch button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      setLang(btn.dataset.lang);
      // update hash for shareable URL
      location.hash = btn.dataset.lang;
    });
  });
  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
});
