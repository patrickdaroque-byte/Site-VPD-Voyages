document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('silo-nav');
    if (!container) return;

    const dest = container.getAttribute('data-dest');
    if (!dest) return;

    const data = {
        'argentine': {
            name: 'Argentine',
            parent: '../../argentine.html',
            links: [
                { name: 'Río de la Plata', url: '../rio-de-la-plata/programme.html' },
                { name: 'Tango et Bodegas', url: '../tango-bodegas/programme.html' },
                { name: 'Ville et Nature', url: '../ville-et-nature/programme.html' },
                { name: 'Buenos Aires, Mendoza et les Andes', url: '../passion-vin-altitude/programme.html' },
                { name: 'Argentine authentique', url: '../argentine-authentique/programme.html' }
            ]
        },
        'colombie': {
            name: 'Colombie',
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
            parent: '../../uruguay.html',
            links: [
                { name: 'Montevideo et Gauchos', url: '../montevideo-gauchos-bodegas/programme.html' }
            ]
        }
    };

    const current = data[dest];
    if (!current) return;

    let html = `<nav aria-label="Navigation du séjour" style="margin: 3rem 0 2rem 0; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef; font-family: sans-serif;">`;
    html += `<div style="font-size: 0.9rem; color: #52636b; margin-bottom: 1rem;">`;
    html += `<a href="../../index.html" style="color: #52636b; text-decoration: none;">Accueil</a> &rsaquo; `;
    html += `<a href="${current.parent}" style="color: #52636b; text-decoration: none;">${current.name}</a> &rsaquo; `;
    html += `<span style="color: #173447; font-weight: bold;">Ce séjour</span></div>`;
    
    html += `<h4 style="margin: 0 0 1rem 0; color: #173447; font-size: 1.1rem;">Voir aussi en ${current.name} :</h4>`;
    html += `<ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; display: flex; flex-wrap: wrap; gap: 0.6rem 1.8rem;">`;
    
    current.links.forEach(link => {
        html += `<li><a href="${link.url}" style="color: #b85132; text-decoration: none;">&rarr; ${link.name}</a></li>`;
    });
    
    html += `</ul>`;
    html += `<div style="font-size: 0.9rem;"><a href="../../voyage-solo.html" style="color: #173e58; text-decoration: underline;">&larr; Voir tous les voyages en petit groupe</a></div>`;
    html += `</nav>`;

    container.innerHTML = html;
});