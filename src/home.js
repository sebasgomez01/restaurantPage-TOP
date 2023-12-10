/*

Este es el HTML que quiero generar dinámicamente
	<header id="navbar">
			<nav>
				<ul id="navList">
					<li class="listElem">Home</li>
					<li class="listElem">Menu</li>
					<li class="listElem">Contact</li>
				</ul>
			</nav>
	</header>

	<div id="mainContent">
			<div id="description">	
				<h1>Welcome to Puentes Amarillos</h1>
				<p id="contentP">In Puentes Amarillos we offer a great variety of classics and moderns recipes, always preparate with premium ingredients for a great gastronomy staff
				</p>
			</div>
			<div id="hours">
				<h2>Hours</h2>
				<ul>
					<li>Sunday: 8am - 8pm</li>
					<li>Monday: 6am - 6pm</li>
					<li>Tuesday: 6am - 6pm</li>
					<li>Wednesday: 6am - 6pm</li>
					<li>Thursday: 6am - 10pm</li>
					<li>Friday: 6am - 10pm</li>
					<li>Saturday: 8am - 10pm</li>
				</ul>
			</div>
			<div id="direction">
				<h2>Direction</h2>
				<p>Callao 1765, Buenos Aires, Argentina</p>
			</div>
			
	</div>
	<footer>
		<p id="footerP">
			Made for 
		</p>
	</footer>

	</div>
*/

const content = document.getElementById('content');
const body = document.getElementById('body');
const presentationParagraph = 'In Puentes Amarillos we offer a great variety of classics and moderns recipes, always preparate with premium ingredients for a great gastronomy staff'
const hoursListStrings = [
	'Sunday: 8am - 8pm', 
	'Monday: 6am - 6pm',
	'Tuesday: 6am - 6pm',
	'Wednesday: 6am - 6pm',
	'Thursday: 6am - 10pm',
	'Friday: 6am - 10pm',
	'Saturday: 8am - 10pm'
];
const directionParagraph = 'Callao 1765, Buenos Aires, Argentina';

const generateHome = () => {
	generateHeader();
	generateMainContent();
	generateFooter();
}

function generateHeader() {
	// Creo el navbar y lo agrego al body#body
	let navbar = document.createElement('header');
	navbar.id = 'navbar';
	content.appendChild(navbar);

	// Creo el nav y lo agrego al navbar
	let nav = document.createElement('nav');
	navbar.appendChild(nav);

	// Creo la lista:
	let navList = document.createElement('ul');
	navList.id = 'navList';
	nav.appendChild(navList)

	// Creo los elementos de la lista y los agrego
	let homeElement = document.createElement('li');
	homeElement.textContent = 'Home';
	homeElement.classList.add('listElem');
	navList.appendChild(homeElement);

	let menuElement = document.createElement('li');
	menuElement.textContent = 'Menu';
	menuElement.classList.add('listElem');
	navList.appendChild(menuElement);

	let contactElement = document.createElement('li');
	contactElement.textContent = 'Contact';
	contactElement.classList.add('listElem');
	navList.appendChild(contactElement);
}

function generateMainContent() {
	// Creo el div#mainContent y lo agrego como child de content
	let mainContent = document.createElement('div');
	mainContent.id = 'mainContent';
	content.appendChild(mainContent);

	// Creo el div#description y lo agrego como child de mainContent
	let description = document.createElement('div');
	description.id = 'description';
	mainContent.appendChild(description);

	// Creo el h1 y el p#contentP y los agrego como hijos de description
	let title = document.createElement('h1');
	title.textContent = 'Welcome to Puentes Amarillos';
	description.appendChild(title);

	let contentP = document.createElement('p');
	contentP.id = 'contentP';
	contentP.textContent = presentationParagraph;
	description.appendChild(contentP);

	// Creo el div#hours y lo agrego como child de mainContent
	let hours = document.createElement('div');
	hours.id = 'hours';
	mainContent.appendChild(hours);

	// Creo el h2 y lo agrego como child de div#hours
	let h2Hours = document.createElement('h2');
	h2Hours.textContent = 'Hours:'
	hours.appendChild(h2Hours);

	// Creo la ul y la agrega como child de div#hours
	let hoursList = document.createElement('ul');
	hours.appendChild(hoursList);

	// Creo los elementos de la lista y los agrego como child de ul
	for(let i = 0; i < hoursListStrings.length; i++) {
		let listElem = document.createElement('li');
		listElem.textContent = hoursListStrings[i];
		hoursList.appendChild(listElem);
	}

	// Creo el div#direction y lo agrego como child de mainContent
	let direction = document.createElement('div');
	direction.id = 'direction';
	mainContent.appendChild(direction);

	// Creo el h2 y el p y los agrego como childs de direction
	let h2Direction = document.createElement('h2');
	h2Direction.textContent = 'Direction:'
	direction.appendChild(h2Direction);
	
	let pDirection = document.createElement('p');
	pDirection.textContent = 'Callao 1765, Buenos Aires, Argentina';
	direction.appendChild(pDirection);
}

function generateFooter() {
	// Creo el elemento footer y lo agrego como child de #content
	let footer = document.createElement('footer');
	content.appendChild(footer);

	// Creo el p#footerP y lo agrego como child del footer:
	let footerP = document.createElement('p');
	footerP.textContent = 'Made for sebasgomez01'
	footer.appendChild(footerP);
}

export { generateHome };

