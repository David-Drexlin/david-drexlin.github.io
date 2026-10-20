'use strict';
    const toggle = document.getElementById('theme-toggle');
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      const dark = document.documentElement.dataset.theme !== 'dark';
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} appearance`);
      toggle.setAttribute('aria-pressed', String(dark));
      document.getElementById('theme-label').textContent = dark ? 'Light' : 'Dark';
      document.querySelector('meta[name="theme-color"]').content = dark ? '#1d1b18' : '#fcfbf6';
    });
    document.getElementById('year').textContent = String(new Date().getFullYear());
    document.querySelectorAll('[data-copy]').forEach(button => {
      button.hidden = false;
      button.addEventListener('click', async () => {
        const source = document.getElementById(button.dataset.copy);
        const status = document.getElementById('status');
        try {
          if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
          await navigator.clipboard.writeText(source.textContent.trim());
          button.textContent = 'Copied';
          status.textContent = 'Citation copied to clipboard.';
        } catch (_) {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(source);
          selection.removeAllRanges();
          selection.addRange(range);
          button.textContent = 'Selected — press ⌘C / Ctrl+C';
          status.textContent = 'Citation selected. Press Command C or Control C to copy.';
        }
        setTimeout(() => { button.textContent = 'Copy citation'; }, 3500);
      });
    });
