(function() {
  const CONSENT_KEY = 'vekto_cookie_consent';

  function hasConsent() {
    return localStorage.getItem(CONSENT_KEY) !== null;
  }

  function getConsent() {
    return localStorage.getItem(CONSENT_KEY) === 'accepted';
  }

  function setConsent(accepted) {
    localStorage.setItem(CONSENT_KEY, accepted ? 'accepted' : 'rejected');
    gtag('consent', 'update', {
      'analytics_storage': accepted ? 'granted' : 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
    document.getElementById('vekto-cookie-banner').remove();
  }

  function showBanner() {
    const banner = document.createElement('div');
    banner.id = 'vekto-cookie-banner';
    banner.innerHTML = `
      <div style="
        position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
        background: #13131F; border-top: 1px solid rgba(99,102,241,0.3);
        padding: 16px 24px; display: flex; align-items: center;
        justify-content: space-between; flex-wrap: wrap; gap: 12px;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        box-shadow: 0 -4px 24px rgba(0,0,0,0.4);
      ">
        <p style="margin:0; font-size:14px; color:#94A3B8; max-width:600px; line-height:1.5;">
          Wir verwenden Cookies zur Analyse des Nutzerverhaltens.
          Weitere Infos in unserer
          <a href="/datenschutz" style="color:#6366F1;">Datenschutzerklärung</a>.
        </p>
        <div style="display:flex; gap:10px; flex-shrink:0;">
          <button onclick="window.vektoCookieConsent.reject()" style="
            background: none; border: 1px solid rgba(255,255,255,0.15);
            border-radius: 8px; padding: 8px 18px; color: #94A3B8;
            font-size: 14px; cursor: pointer;
          ">Ablehnen</button>
          <button onclick="window.vektoCookieConsent.accept()" style="
            background: #6366F1; border: none; border-radius: 8px;
            padding: 8px 18px; color: #fff; font-size: 14px;
            font-weight: 600; cursor: pointer;
          ">Akzeptieren</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
  }

  window.vektoCookieConsent = {
    accept: () => setConsent(true),
    reject: () => setConsent(false)
  };

  // Beim Laden: Banner zeigen falls noch keine Entscheidung
  document.addEventListener('DOMContentLoaded', function() {
    if (!hasConsent()) {
      showBanner();
    } else if (getConsent()) {
      gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }
  });
})();
