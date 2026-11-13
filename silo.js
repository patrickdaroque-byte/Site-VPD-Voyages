document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('silo-nav');
    if (!container) return;

    const dest = container.getAttribute('data-dest');
    if (!dest) return;

    const currentPath = window.location.pathname;
    const parts = currentPath.split('/').filter(Boolean);
    const currentSlug = parts.length >= 2 ? parts[parts.length - 2] : '';

    const data = {
        'argentine': {
            name: 'Argentine',
            preposition: 'en',
            parent: '../../argentine.html',
            links: [
                { name: 'Río de la Plata', url: '../rio-de-la-plata/programme.html' },
                { name: 'Tango et Bodegas', url: '../tango-bodegas/programme.html' },
                { name: 'Ville et Nature', url: '../ville-et-nature/programme.html' },
                { name: 'Buenos Aires, Mendoza et les Andes', url: '../passion-vin-altitude/programme.html' },
                { name: 'Argentine authentique', url: '../argentine-authentique/programme.html' },
                { name: 'Tango-thérapie', url: '../tango-therapie/programme.html' }
            ]
        },
        'colombie': {
            name: 'Colombie',
            preposition: 'en',
            parent: '../../colombie.html',
            links: [
                { name: 'Le Triangle magique', url: '../triangle-magique/programme.html' },
                { name: 'La Magie réaliste', url: '../magie-realiste/programme.html' },
                { name: 'Festival de Tango Medellín', url: '../passion-tango-medellin/programme.html' },
                { name: 'Cali, capitale de la Salsa', url: '../salsa-cali/programme.html' }
            ]
        },
        'cuba': {
            name: 'Cuba',
            preposition: 'à', // CORRECTION ICI
            parent: '../../cuba.html',
            links: [
                { name: 'Découverte et patrimoine', url: '../decouverte-patrimoine-traditions/programme.html' },
                { name: 'Festival de Jazz', url: '../cuba-jazz/programme.html' },
                { name: 'Entre Salsa et Tango', url: '../cuba-salsa-tango/programme.html' },
                { name: 'Festival de Tango', url: '../cuba-tango/programme.html' },
                { name: 'Traversée à vélo', url: '../cuba-a-velo/programme.html' },
                { name: 'Randonnée Viñales', url: '../randonnee-vinales-trinidad/programme.html' },
                { name: 'Stage Photo', url: '../stage-photo-havane-trinidad/programme.html' }
            ]
        },
        'espagne': {
            name: 'Espagne',
            preposition: 'en',
            parent: '../../espagne.html',
            links: [
                { name: 'La Rioja', url: '../la-rioja/programme.html' },
                { name: 'Ribera del Duero', url: '../ribera-del-duero/programme.html' },
                { name: 'Valence', url: '../valencia/programme.html' },
                { name: 'Pics d\'Europe', url: '../pics-europe/programme.html' },
                { name: 'Salamanque', url: '../salamanque/programme.html' },
                { name: 'Matarraña', url: '../matarrena/programme.html' },
                { name: 'Bilbao', url: '../bilbao/programme.html' },
                { name: 'Barcelone', url: '../barcelone/programme.html' }
            ]
        },
        'uruguay': {
            name: 'Uruguay',
            preposition: 'en',
            parent: '../../uruguay.html',
            links: [
                { name: 'Montevideo et Gauchos', url: '../montevideo-gauchos-bodegas/programme.html' },
                { name: 'Río de la Plata', url: '../rio-de-la-plata/programme.html' }
            ]
        }
    };

    const current = data[dest];
    if (!current) return;

    // --- CONSTRUCTION DU CARTOUCHE CENTRÉ AVEC BULLES ---
    let html = `<nav aria-label="Navigation du séjour" style="max-width: 800px; margin: 4rem auto 3rem auto; padding: 2.5rem 2rem; background: #e9ecef; border-radius: 12px; border: 1px solid #ced4da; text-align: center; font-family: sans-serif; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">`;
    
    html += `<div style="font-size: 0.85rem; color: #52636b; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.5px;">`;
    html += `<a href="../../index.html" style="color: #52636b; text-decoration: none;">Accueil</a> &rsaquo; `;
    html += `<a href="${current.parent}" style="color: #52636b; text-decoration: none;">${current.name}</a> &rsaquo; `;
    html += `<span style="color: #173447; font-weight: bold;">Ce séjour</span></div>`;
    
    // CORRECTION ICI : Utilisation de la préposition
    html += `<h4 style="margin: 0 0 2rem 0; color: #173447; font-size: 1.25rem; font-weight: 600;">Voir aussi ${current.preposition} ${current.name} :</h4>`;
    
    html += `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 2rem;">`;
    current.links.forEach(link => {
        const linkParts = link.url.split('/').filter(p => p !== '..' && p !== '.');
        const linkSlug = linkParts[0];
        if (linkSlug === currentSlug) return;
        
        html += `<a href="${link.url}" style="display: inline-block; padding: 10px 20px; background-color: #ffffff; border: 1px solid #b85132; color: #b85132; border-radius: 50px; text-decoration: none; font-weight: 500; font-size: 0.95rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">${link.name}</a>`;
    });
    html += `</div>`;
    
    html += `<div style="font-size: 0.95rem; margin-top: 1rem;"><a href="../../voyage-solo.html" style="color: #173e58; text-decoration: none; border-bottom: 1px solid #173e58; padding-bottom: 2px;">&larr; Voir tous les voyages en petit groupe</a></div>`;
    html += `</nav>`;

    container.innerHTML = html;
});