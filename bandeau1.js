document.addEventListener('DOMContentLoaded', function () {
  var bandeau = document.getElementById('bandeau-orange');
  if (bandeau) {
    bandeau.style.display = 'flex';
    bandeau.style.flexDirection = 'column';
    bandeau.style.justifyContent = 'center';
    bandeau.style.alignItems = 'center';
    bandeau.style.textAlign = 'center';
    bandeau.style.maxWidth = '780px';
    bandeau.style.margin = '0 auto 1rem auto';
    bandeau.style.padding = '8px 16px';
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
      .flag-fr {
        width: 16px;
        height: 11px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 3px;
        border-radius: 1px;
      }
      .highlight-text {
        color: #f6e05e;
        font-style: italic;
        font-weight: 500;
        border-bottom: 1px dotted #f6e05e;
        padding-bottom: 1px;
      }
      @media (max-width: 600px) {
        #bandeau-orange {
          max-width: 95% !important;
          padding: 8px 10px !important;
        }
        #bandeau-orange .bandeau-ligne {
          font-size: 0.75rem !important;
          line-height: 1.35 !important;
        }
        .flag-fr {
          width: 14px;
          height: 10px;
        }
      }
    `;
    document.head.appendChild(styleFix);

    // Drapeau français en SVG inline
    var flagSvg = `<svg class="flag-fr" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#002395"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ED2939"/></svg>`;

    // Détection de la page actuelle
    var pathname = window.location.pathname.toLowerCase();

    if (pathname.includes('espagne')) {
      bandeau.innerHTML = `
        <div class="bandeau-ligne" style="font-size: 0.82rem; line-height: 1.4; font-weight: 400; letter-spacing: 0.01em;">
          <span style="color: #f6e05e; margin-right: 3px;">✦</span>
          <span><strong style="color: #f6e05e; font-weight: 600;">Autonomie :</strong> Hébergement • Déjeuners • 3 dîners • Activités - <span class="highlight-text">Voyagez librement.</span></span>
        </div>
        <div class="bandeau-ligne" style="font-size: 0.82rem; line-height: 1.4; font-weight: 400; letter-spacing: 0.01em; margin-top: 2px;">
          <span style="color: #f6e05e; margin-right: 3px;">✦</span>
          <span><strong style="color: #f6e05e; font-weight: 600;">Sérénité :</strong> Hébergement • Déjeuners • 3 dîners • Activités - <span class="highlight-text">${flagSvg} Accompagnement francophone + 🚐 Tous transports.</span></span>
        </div>
      `;
    } else {
      // Pour argentine, cuba, colombie et uruguay
      bandeau.innerHTML = `
        <div class="bandeau-ligne" style="font-size: 0.82rem; line-height: 1.4; font-weight: 400; letter-spacing: 0.01em;">
          <span style="color: #f6e05e; margin-right: 3px;">✦</span>
          <span><strong style="color: #f6e05e; font-weight: 600;">Autonomie :</strong> Hébergement • Déjeuners • 3 dîners • Activités <span class="highlight-text">Voyagez librement.</span></span>
        </div>
        <div class="bandeau-ligne" style="font-size: 0.82rem; line-height: 1.4; font-weight: 400; letter-spacing: 0.01em; margin-top: 2px;">
          <span style="color: #f6e05e; margin-right: 3px;">✦</span>
          <span><strong style="color: #f6e05e; font-weight: 600;">Sérénité :</strong> Hébergement • Déjeuners • 3 dîners • Activités - <span class="highlight-text">${flagSvg} Accompagnement francophone + ✈️ Vols internationaux.</span></span>
        </div>
      `;
    }
  }
});