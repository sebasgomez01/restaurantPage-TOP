/*

 Este es el HTML que quiero crear dentro de div#content:

<div id="mainContent">
			<h1>Contact us</h1>	
			<div id="socialMedia">
				<a>
					<img class="socialMediaButton" src="instagram.jpg" alt="Instagram logo">
				</a>

					<img class="socialMediaButton" src="facebook.webp" alt="Facebook logo">


				<img class="socialMediaButton" src="logoX.png" alt="X logo">
				
			</div>
			<h1>Reservations at:</h1>
			<h2>1234567890</h2>
			<h2>puentesamarillos@notFakeEmail.com</h2>
		</div>
		


*/

import { generateHeader, generateFooter } from './home.js';

const generateContact = () => {
	generateHeader();
	generateContactUs();
	generateFooter();
}

const content = document.getElementById('content');
const socialMediaButtonsData = [
	{
		'href': 'https://www.instagram.com',
		'src': 'img/instagram.jpg',
		'alt': 'Instagram logo'
	},

	{
		'href': 'https://www.facebook.com',
		'src': 'img/facebook.webp',
		'alt': 'Facebook logo'
	},
	{
		'href': 'https://www.twitter.com',
		'src': 'img/logoX.png',
		'alt': 'X logo'
	}


]

function generateContactUs() { 
	// Creo el div#mainContent y lo agrego como hijo de div#content
	let mainContent = document.createElement('div');
	mainContent.id = 'mainContent';
	content.appendChild(mainContent);

	// Creo el h1 con el texto Contact Us y lo agrego como hijo de div#mainContent
	let contactUsH1 = document.createElement('h1');
	contactUsH1.textContent = 'Contact Us';
	mainContent.appendChild(contactUsH1);

	// Creo el div#socialMedia y lo agrego como hijo de div#mainContent
	let socialMedia = document.createElement('div');
	socialMedia.id = 'socialMedia';
	mainContent.appendChild(socialMedia);

	// Creo los links con las imágenes y las agrego como hijos de div#socialMedia
	for(let i = 0; i < socialMediaButtonsData.length; i++) {
		let aElem = document.createElement('a');
		aElem.href = socialMediaButtonsData[i]['href'];
		aElem.target = '_blank';
		socialMedia.appendChild(aElem);

		let imgElem = document.createElement('img');
		imgElem.classList.add('socialMediaButton');
		imgElem.src = socialMediaButtonsData[i]['src'];
		imgElem.alt = socialMediaButtonsData[i]['alt'];
		aElem.appendChild(imgElem);
	}

	// Creo el h1 con el texto "Reservations at:" y lo agrego como hijo de #mainContent
	let h1Reservations = document.createElement('h1');
	h1Reservations.textContent = 'Reservations at:';
	mainContent.appendChild(h1Reservations);

	// Creo el h2 con el teléfono y lo agrego como hijo de #mainContent
	let phoneNumber = document.createElement('h2');
	phoneNumber.textContent = 'Phone: 1234567890';
	mainContent.appendChild(phoneNumber);

	// Creo el h2 con el email y lo agrego como hijo de #mainContent
	let email = document.createElement('h2');
	email.textContent = 'Email: puentesamarillos@notFakeEmail.com';
	mainContent.appendChild(email);
}

export { generateContact }
