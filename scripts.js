// Language selector script
(function () {
  const langSelect = document.getElementById('lang-select');
  const langContainer = document.querySelector('.lang-select');
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

  function setLang(lang) {
    const bodyClass = lang === 'ar' ? 'lang-ar' : 'lang-en';
    document.body.classList.remove('lang-ar', 'lang-en');
    document.body.classList.add(bodyClass);
    document.documentElement.lang = lang;
    document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
    localStorage.setItem('socotra_lang', lang);
    if (lang !== 'ar') {
      langContainer.classList.add('fallback-english');
    } else {
      langContainer.classList.remove('fallback-english');
    }
    if (langSelect) {
      langSelect.value = lang;
    }
  }

  const saved = localStorage.getItem('socotra_lang') || 'ar';
  setLang(saved);

  if (langSelect) {
    langSelect.addEventListener('change', function () {
      setLang(this.value);
    });
  }
})();
