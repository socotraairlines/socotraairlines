// Language toggle script
(function () {
  const btnAr = document.getElementById('btn-ar');
  const btnEn = document.getElementById('btn-en');

  function setLang(lang) {
    document.body.classList.remove('lang-ar', 'lang-en');
    document.body.classList.add(lang === 'ar' ? 'lang-ar' : 'lang-en');
    // set active button
    btnAr.classList.toggle('active', lang === 'ar');
    btnEn.classList.toggle('active', lang === 'en');
    // set html lang attribute and dir
    document.documentElement.lang = (lang === 'ar') ? 'ar' : 'en';
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    localStorage.setItem('socotra_lang', lang);
  }

  // initialize from storage or default to Arabic
  const saved = localStorage.getItem('socotra_lang') || 'ar';
  setLang(saved);

  btnAr.addEventListener('click', function () { setLang('ar'); });
  btnEn.addEventListener('click', function () { setLang('en'); });
})();
