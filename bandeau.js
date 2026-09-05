document.addEventListener('DOMContentLoaded', function () {
  var bandeau = document.getElementById('bandeau-orange');
  if (bandeau) {
    bandeau.style.display = 'flex';
    bandeau.style.flexDirection = 'column';
    bandeau.style.justifyContent = 'center';
    bandeau.style.alignItems = 'center';
    bandeau.style.textAlign = 'center';
    bandeau.style.maxWidth = '740px';
    bandeau.style.margin = '0 auto 1rem auto';
    bandeau.style.padding = '6px 16px';
    bandeau.style.borderRadius = '6px';
    
    bandeau.style.background = 'linear-gradient(135deg, #2b6cb0 0%, #1a4980 100%)';
    bandeau.style.border = '1px solid #ecc94b';
    bandeau.style.boxShadow = '0 3px 10px rgba(43, 108, 176, 0.25)';
    bandeau.style.color = '#ffffff';
    bandeau.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

    var styleFix = document.createElement('style');
    styleFix.innerHTML = `
      #bandeau-orange::before, #bandeau-orange::after {
        display: none !important;
        content: "" !important;
      }
      @media (max-width: 600px) {
        #bandeau-orange {
          max-width: 92% !important;
          padding: 6px 10px !important;
        }
        #bandeau-orange .bandeau-ligne {
          font-size: 0.75rem !important;
          line-height: 1.35 !important;
        }
      }
    `;
    document.head.appendChild(styleFix);

    var page = window.location.pathname.split('/').pop().toLowerCase();
    var estEspagne = page.indexOf('espagne') !== -1;

    var flagSvg = '<svg width="11" height="8" viewBox="0 0 3 2" style="vertical-align:middle; margin-right:2px; border-radius:1px;"><rect width="1" height="2" fill="#0055A4"/><rect x="1" width="1" height="2" fill="#FFFFFF"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>';

    var transportIcon = estEspagne ? '🚐' : '✈️';
    var texteSerenite = estEspagne
      ? 'Accompagnement francophone + tous transports.'
      : 'Accompagnement francophone + vols internationaux.';

    bandeau.innerHTML = `
      <div class="bandeau-ligne" style="font-size: 0.82rem; line-height: 1.4; font-weight: 400; letter-spacing: 0.01em;">
        <span style="color: #f6e05e; margin-right: 3px;">✦</span>
        <span><strong style="color: #f6e05e; font-weight: 600;">Autonomie :</strong> Hébergement • Déjeuners • 3 dîners • Activités <em style="opacity:0.88; font-size:0.92em;">Voyagez librement.</em></span>
      </div>
      <div class="bandeau-ligne" style="font-size: 0.82rem; line-height: 1.4; font-weight: 400; letter-spacing: 0.01em; margin-top: 1px;">
        <span style="color: #f6e05e; margin-right: 3px;">✦</span>
        <span><strong style="color: #f6e05e; font-weight: 600;">Sérénité :</strong> Hébergement • Déjeuners • 3 dîners • Activités <em style="opacity:0.88; font-size:0.92em; white-space:nowrap;">${flagSvg}${transportIcon} ${texteSerenite}</em></span>
      </div>
    `;
  }
});