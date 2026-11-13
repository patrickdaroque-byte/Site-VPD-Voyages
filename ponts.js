document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('ponts-nav');
    if (!container) return;

    // Détection de la page courante pour ne pas se lier soi-même
    const currentPath = window.location.pathname;
    const parts = currentPath.split('/').filter(Boolean);
    const currentSlug = parts.length >= 2 ? parts[parts.length - 2] : '';

    // Liste des séjours "Tango & Danse" (URLs vérifiées de votre sitemap)
    const tangoLinks = [
        { name: 'Tango et Bodegas (Argentine)', url: '../tango-bodegas/programme.html' },
        { name: 'Tango-thérapie (Argentine)', url: '../tango-therapie/programme.html' },
        { name: 'Río de la Plata (Argentine/Uruguay)', url: '../rio-de-la-plata/programme.html' },
        { name: 'Festival de Tango à Medellín (Colombie)', url: '../passion-tango-medellin/programme.html' },
        { name: 'Festival de Tango à La Havane (Cuba)', url: '../cuba-tango/programme.html' },
        { name: 'Entre Salsa et Tango (Cuba)', url: '../cuba-salsa-tango/programme.html' }
    ];

    // Exclure automatiquement la page sur laquelle on se trouve
    const filteredLinks = tangoLinks.filter(link => {
        const linkParts = link.url.split('/').filter(p => p !== '..' && p !== '.');
        return linkParts[0] !== currentSlug;
    });

    if (filteredLinks.length === 0) return;

    // Construction du bloc "Pont Thématique"
    let html = `<div style="max-width: 800px; margin: 3rem auto 2rem auto; padding: 2rem; background: #fdf6f0; border-left: 4px solid #b85132; border-radius: 8px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">`;
    html += `<h4 style="margin: 0 0 0.8rem 0; color: #173447; font-size: 1.15rem; font-weight: 600;">💃 Envie d'aller plus loin dans votre passion du Tango ?</h4>`;
    html += `<p style="margin: 0 0 1.5rem 0; color: #52636b; font-size: 0.95rem;">Découvrez comment cette passion s'exprime ailleurs en Amérique latine :</p>`;
    html += `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">`;
    
    filteredLinks.forEach(link => {
        html += `<a href="${link.url}" style="display: inline-block; padding: 8px 16px; background-color: #ffffff; border: 1px solid #b85132; color: #b85132; border-radius: 50px; text-decoration: none; font-weight: 500; font-size: 0.9rem;">${link.name}</a>`;
    });
    
    html += `</div></div>`;
    container.innerHTML = html;
});