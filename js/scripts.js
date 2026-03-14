fetch('../data/starships.json')
    .then(Response => Response.json())
    .then(ships => {
        buildNav(ships);
        showShip(ships[0]);
    });

function buildNav(ships) {
    const nav = document.getElementById('ship-nav');
    ships.forEach(ship => {
        const btn = document.createElement('button');
        btn.textContent = ship.name;
        btn.addEventListener('click', () => {
            document.querySelectorAll('#ship-nav button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showShip(ship);
        });
        nav.appendChild(btn);
    });
    nav.firstChild.classList.add('active');
}

function showShip(ship) {
    const id = ship.url.split('/').filter(Boolean).pop(); // learned to use this from ai, kinda neat
    const img = document.getElementById('ship-img');
    img.src = `https://resources.dgmuvu.com/ships/${id}.jpg`;
    img.alt = ship.name;
    img.onerror = () => {
        img.src = 'https://resources.dgmuvu.com/ships/placeholder.jpg';
        img.onerror = null;
    };
    document.getElementById('ship-name').textContent = ship.name;
}
