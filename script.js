(function(){
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
  const yearEl = $("#year"); if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth anchor scroll
  $$(".nav a, .btn.primary").forEach(a=>{
    a.addEventListener("click", (e)=>{
      const href = a.getAttribute("href");
      if(href && href.startsWith("#")){
        e.preventDefault();
        const target = $(href);
        if(target){
          window.scrollTo({top: target.offsetTop - 70, behavior:"smooth"});
          history.pushState(null, "", href);
        }
      }
    });
  });

  // i18n
  const dict = {
    en: {
      "menu.services": "Services",
      "menu.why": "Why us",
      "menu.partners": "Partners",
      "menu.contacts": "Contacts",
      "hero.title": "Wholesale and Logistics Solutions",
      "hero.subtitle": "Building distribution, optimizing logistics, ensuring payments and deal flow.",
      "hero.cta": "Start cooperation",
      "services.title": "Our Services",
      "services.card1.title": "Wholesale assortment & payment solutions",
      "services.card1.text": "Product mix selection, terms, and tailored payment models.",
      "services.card2.title": "Distribution & logistics",
      "services.card2.text": "Supply-chain design, transport, customs, bonded storage.",
      "services.card3.title": "Consulting & deal support",
      "services.card3.text": "Negotiations, contracts, quality control, long-term guidance.",
      "partners.title": "Our Partners",
      "partners.caption": "Logos are used for reference to illustrate cooperation capabilities.",
      "why.title": "Why us",
      "why.text": "We work officially with transparent processes, documentation and compliance. Focus on B2B supply and long-term relations.",
      "contacts.title": "Contacts"
    },
    ru: {
      "menu.services": "Услуги",
      "menu.why": "Почему мы",
      "menu.partners": "Партнёры",
      "menu.contacts": "Контакты",
      "hero.title": "Оптовая торговля и логистические решения",
      "hero.subtitle": "Построение дистрибуции, оптимизация логистики, обеспечение платежей и сопровождение сделок.",
      "hero.cta": "Начать сотрудничество",
      "services.title": "Наши услуги",
      "services.card1.title": "Оптовый ассортимент и платёжные решения",
      "services.card1.text": "Подбор ассортимента, условий и моделей оплаты.",
      "services.card2.title": "Дистрибуция и логистика",
      "services.card2.text": "Проектирование цепочки поставок, транспорт, таможня, склад под акциз.",
      "services.card3.title": "Консалтинг и сопровождение сделок",
      "services.card3.text": "Переговоры, договоры, контроль качества, долгосрочное ведение.",
      "partners.title": "Наши партнёры",
      "partners.caption": "Логотипы используются для иллюстрации возможностей сотрудничества.",
      "why.title": "Почему мы",
      "why.text": "Работаем официально: прозрачные процессы, документы и комплаенс. Фокус на B2B поставках и долгосрочных отношениях.",
      "contacts.title": "Контакты"
    }
  };

  function applyLang(lang){
    const dictLang = dict[lang] || dict.en;
    $$("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if(dictLang[k]) el.textContent = dictLang[k];
    });
    // buttons pressed state
    $$(".lang-btn").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang===lang ? "true":"false"));
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }

  const saved = localStorage.getItem("lang") || "EN";
  applyLang(saved.toLowerCase());

  $$(".lang-btn").forEach(btn=>{
    btn.addEventListener("click", ()=> applyLang(btn.dataset.lang));
  });
})();