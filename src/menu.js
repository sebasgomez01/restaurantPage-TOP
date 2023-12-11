import { generateHeader, generateFooter } from './home.js';

const content = document.getElementById('content');
const body = document.getElementById('body');
const dataComidaMenuItems = [
	{
		'srcImg': 'img/pasta.jpg',
		'altImg': 'Pasta',
		'h2Text': 'Pasta',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/sushi.jfif',
		'altImg': 'Sushi',
		'h2Text': 'Sushi',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/empanadas.jfif',
		'altImg': 'Empanadas',
		'h2Text': 'Empanadas',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/pizza.webp',
		'altImg': 'Pizza',
		'h2Text': 'Pizza',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/milanesas.webp',
		'altImg': 'Milanesas',
		'h2Text': 'Milanesas',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/choripan.jfif',
		'altImg': 'Choripan',
		'h2Text': 'Choripan',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	}	

];

const dataBebidasMenuItems = [
	{
		'srcImg': 'img/cocaCola.png',
		'altImg': 'Coca Cola',
		'h2Text': 'Coca Cola',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/heineken.png',
		'altImg': 'Heineken',
		'h2Text': 'Heineken',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/wine.avif',
		'altImg': 'Wines',
		'h2Text': 'Wines',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/monster.jfif',
		'altImg': 'Monster',
		'h2Text': 'Monster',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/coffe.jpg',
		'altImg': 'Coffe',
		'h2Text': 'Coffe',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	},

	{
		'srcImg': 'img/tea.jfif',
		'altImg': 'Earl Grey Tea',
		'h2Text': 'Earl Grey Tea',
		'pText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	}	

];

const generateMenu = () => {
	generateHeader();
	generateContentMenu();
	generateFooter();
}

function generateContentMenu() {
	// Creo el div#menu y lo agrego como hijo de content
	let menu = document.createElement('div');
	menu.id = 'menu';
	content.appendChild(menu);

	// Creo el div#menuH1 y lo agrego como hijo de #menu
	let menuH1 = document.createElement('div');
	menuH1.id = 'menuH1';
	menu.appendChild(menuH1);

	// Creo que h1 con el texto Menu y lo agrego como hijo de #menuH1
	let h1 = document.createElement('h1');
	h1.textContent = 'Menu';
	menuH1.appendChild(h1);

	// Creo el h2 con el texto Comidas y lo agrego como hijo de #menu
	let h2Comidas = document.createElement('h2');
	h2Comidas.textContent = 'Comidas';
	menu.appendChild(h2Comidas);

	// Creo el primero div.menuItems y lo agrego como hijo de #menu
	let comidaMenuItems = document.createElement('div');
	comidaMenuItems.classList.add('menuItems');
	menu.appendChild(comidaMenuItems);

	// Creo los items del menu en la parte comidas
	for(let i = 0; i < dataComidaMenuItems.length; i++) {
		console.log('creo item:' + dataComidaMenuItems[i]['h2Text'])
		// Creo el div.menuItem y lo agrego como hijo de .menuItems
		let menuItem = document.createElement('div');
		menuItem.classList.add('menuItem');
		comidaMenuItems.appendChild(menuItem);

		// Creo los hijos de div.menuItem y los agrego a su contenedor	
		let img = document.createElement('img');
		img.classList.add('menuImages');
		img.src = dataComidaMenuItems[i]['srcImg']
		img.alt = dataComidaMenuItems[i]['altImg']
		menuItem.appendChild(img);

		let h2 = document.createElement('h2');
		h2.textContent = dataComidaMenuItems[i]['h2Text'];
		menuItem.appendChild(h2);

		let p = document.createElement('p');
		p.classList.add('menuItemP')
		p.textContent = dataComidaMenuItems[i]['pText'];
		menuItem.appendChild(p);
	}

	// Creo el h2 con el texto bebidas y lo agrego como hijo de #menu
	let h2Bebidas = document.createElement('h2');
	h2Bebidas.textContent = 'Bebidas';
	menu.appendChild(h2Bebidas);
	console.log('agrego el h2')

	// Creo el segundo div.menuItems y lo agrego como hijo de #menu
	let bebidaMenuItems = document.createElement('div');
	bebidaMenuItems.classList.add('menuItems');
	menu.appendChild(bebidaMenuItems);
	console.log('agrego el div de bebidas')

	// Creo los items del menu en la parte bebidas
	for(let i = 0; i < dataBebidasMenuItems.length; i++) {
		console.log('creo item:' + dataBebidasMenuItems[i]['h2Text'])
		// Creo el div.menuItem y lo agrego como hijo de .menuItems
		let menuItem = document.createElement('div');
		menuItem.classList.add('menuItem');
		bebidaMenuItems.appendChild(menuItem);

		// Creo los hijos de div.menuItem y los agrego a su contenedor	
		let img = document.createElement('img');
		img.classList.add('menuImages');
		img.src = dataBebidasMenuItems[i]['srcImg']
		img.alt = dataBebidasMenuItems[i]['altImg']
		menuItem.appendChild(img);

		let h2 = document.createElement('h2');
		h2.textContent = dataBebidasMenuItems[i]['h2Text'];
		menuItem.appendChild(h2);

		let p = document.createElement('p');
		p.classList.add('menuItemP');
		p.textContent = dataBebidasMenuItems[i]['pText'];
		menuItem.appendChild(p);
	}
}

export { generateMenu }


/*
	Este es el html que quiero generar dinámicamente:

		<header id="navbar">
			<nav>
				<ul id="navList">
					<li class="listElem">Home</li>
					<li class="listElem">Menu</li>
					<li class="listElem">Contact</li>
				</ul>
			</nav>
		</header>

		<div id="menu">
			<div id="menuH1">
				<h1>Menu</h1>
			</div>
			<h2>Comidas</h2>
			<div class="menuItems">
				<div class="menuItem">
					<img class="menuImages" src="pasta-recipe.jpg" alt="Pasta">
					<h2>Pasta</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
				</div>
				<div class="menuItem">
					<img class="menuImages" src="sushi-recipe.jfif" alt="Sushi">
					<h2>Sushi</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div class="menuItem">
					<img class="menuImages" src="pizza.webp" alt="Pizza">
					<h2>Pizza</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					
				</div>
				<div class="menuItem">
					<img class="menuImages" src="empanadas.jfif" alt="Empanadas">
					<h2>Empanadas</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					
				</div>
				<div class="menuItem">
					<img class="menuImages" src="milanesas.webp" alt="Milanesas con papas">
					<h2>Milanesas con papas</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					
				</div>
				<div class="menuItem">
					<img class="menuImages" src="choripan.jfif" alt="Choripan">
					<h2>Choripan</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					
				</div>
			</div>

			<h2>Bebidas</h2>
			<div class="menuItems">
				<div class="menuItem">
					<img class="menuImages" src="cocaCola.png" alt="Coca Cola">
					<h2>Coca Cola</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
				</div>
				<div class="menuItem">
					<img class="menuImages" src="heineken.png" alt="heineken">
					<h2>Heineken</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div class="menuItem">
					<img class="menuImages" src="wine.avif" alt="Wines">
					<h2>Wines</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					
				</div>
				<div class="menuItem">
					<img class="menuImages" src="monster.jfif" alt="Monster">
					<h2>Monster</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					
				</div>
				<div class="menuItem">
					<img class="menuImages" src="coffe.jpg" alt="COFFE">
					<h2>Coffe</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					
				</div>
				<div class="menuItem">
					<img class="menuImages" src="tea.jfif" alt="Earl grey tea">
					<h2>Earl Grey Tea</h2>
					<p class="menuItemP">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					
				</div>
			</div>
		</div>
	
		<footer>
			<p>Made by sebasgomez01</p>
		</footer>

*/
