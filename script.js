// Theme toggle + year + smooth-scroll
(function(){
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  const key = 'cybersandhu-theme';
  const btn = document.getElementById('themeToggle');
  function applyTheme(t){ document.body.classList.toggle('theme-dark', t==='dark'); }
  const saved = localStorage.getItem(key) || 'dark';
  applyTheme(saved);
  if (btn){
    btn.addEventListener('click', () => {
      const cur = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
      const next = cur === 'dark' ? 'light' : 'dark';
      localStorage.setItem(key, next);
      applyTheme(next);
    });
  }

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1){
        const el = document.querySelector(id);
        if (el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });
})();
