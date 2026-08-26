// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Simple contact form handler (no network call)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim() || 'Friend';
      // Minimal feedback: replace form with a thank-you message
      const thanks = document.createElement('div');
      thanks.className = 'thank-you';
      thanks.innerHTML = `<p>Thanks, <strong>${escapeHtml(name)}</strong> — your message was received (demo).</p>`;
      form.replaceWith(thanks);
    });
  }

  // small helper to avoid inserting raw HTML
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
    });
  }
});
