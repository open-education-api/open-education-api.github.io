/*
 * OOAPI Documentation Version Handling (British English)
 * ------------------------------------------------------
 * - Short banner messages with the visible version included
 * - Banner is fixed at the top of the viewport
 * - All alignment handled in CSS: no resize/offset logic
 * - Version selector overridden for clean URLs
 */

(function () {
  const CURRENT_VERSION = 'v6';   // stable release (folder name)
  const BETA_VERSION = '';    // beta release (folder name)

  /**
   * Format folder name (e.g. "v6" -> "v6.0", "v6.1" stays "v6.1").
   */
  function formatVersionLabel(folder) {
    if (!folder) return '';
    return /\./.test(folder) ? folder : folder + '.0';
  }

  /**
   * Render banner depending on version.
   * Layout wordt volledig door CSS gedaan.
   */
  function renderBanner() {
    const path = window.location.pathname || '';
    const versionMatch = path.match(/v\d+(\.\d+)?/);
    const banner = document.getElementById('version-banner');

    if (!banner || !versionMatch) return;

    const versionFolder = versionMatch[0];          // bv. "v6" of "v6.0"
    const versionLabel  = formatVersionLabel(versionFolder);

    // Current stable → no banner
    if (versionFolder === CURRENT_VERSION) {
      banner.style.display = 'none';
      document.body.classList.remove('with-banner');
      banner.className = '';
      banner.innerHTML = '';
    } else if (BETA_VERSION && versionFolder === BETA_VERSION) {
      // Beta banner
      banner.className = 'banner-beta';
      banner.innerHTML = `
        <div class="version-banner-inner">
          <strong>OOAPI ${versionLabel} (beta).</strong>
          Latest stable:
          <a href="/${CURRENT_VERSION}/">${formatVersionLabel(CURRENT_VERSION)}</a>.
        </div>
      `;
      banner.style.display = 'block';
      document.body.classList.add('with-banner');
    } else {
      // Older-than-stable banner
      banner.className = 'banner-old';
      const betaPart = BETA_VERSION
        ? ` Beta:
            <a href="/${BETA_VERSION}/">${formatVersionLabel(BETA_VERSION)}</a>.`
        : '';
      banner.innerHTML = `
        <div class="version-banner-inner">
          <strong>OOAPI ${versionLabel} (old).</strong>
          Latest:
          <a href="/${CURRENT_VERSION}/">${formatVersionLabel(CURRENT_VERSION)}</a>.${betaPart}
        </div>
      `;
      banner.style.display = 'block';
      document.body.classList.add('with-banner');
    }
  }

  /**
   * Override Docsify Versioned Plugin to ensure stable URLs.
   */
  function initialiseVersionSwitch() {
    document.addEventListener(
      'change',
      function (event) {
        const el = event.target;
        if (!el || el.tagName !== 'SELECT') return;

        const folder = (el.value || '').replace(/^\/|\/$/g, '');
        if (!folder) return;

        event.stopImmediatePropagation();

        const hash = window.location.hash || '#/';
        const base = window.location.origin;

        window.location.href =
          base + '/' + folder + '/' + hash.replace(/^#?/, '#');
      },
      true
    );
  }

  function initialise() {
    // kleine delay zodat Docsify de layout klaar heeft
    setTimeout(renderBanner, 80);
    initialiseVersionSwitch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialise);
  } else {
    initialise();
  }
})();
