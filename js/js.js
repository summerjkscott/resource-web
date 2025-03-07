const artists = [
    { name: "Ariana Grande", image: "images/ariana-home.jpg", link: "artists/ariana/arianagrande.html" },
    { name: "Billie Eilish", image: "images/billie-home.jpg", link: "artists/billie/billieeilish.html" },
    { name: "Olivia Rodrigo", image: "images/olivia-home.jpg", link: "artists/olivia/oliviarodrigo.html" },
    { name: "Sabrina Carpenter", image: "images/sabrina-home.jpg", link: "artists/sabrina/sabrinacarpenter.html" },
    { name: "Tate McRae", image: "images/tate-home.jpg", link: "artists/tate/tatemcrae.html" },
    { name: "Taylor Swift", image: "images/taylor-home.jpg", link: "artists/taylor/taylorswift.html" }
];

const container = document.getElementById('artistContainer');

artists.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
        <a href="${artist.link}">
            <img src="${artist.image}" alt="${artist.name}">
            <h2>${artist.name}</h2>
        </a>
    `;
    container.appendChild(card);
});