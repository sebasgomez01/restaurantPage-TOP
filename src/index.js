import { generateHome } from './home';
import { generateMenu } from './menu';
import { generateContact } from './contact';

generateHome();

const contentDiv = document.getElementById('content');  

/*
Este pedazo de código no funciona porque los li se est´´an regenerando entonces ya no 
tienen el addEventListener luego del primer click

// Para generar home
const liHome = document.getElementById('liHome');
console.log(liHome);

liHome.addEventListener('click', function() {
	console.log('hiciste click en home')
	contentDiv.innerHTML = "";
	generateHome();
});


// Para generar menu
const liMenu = document.getElementById('liMenu');
console.log(liMenu);

liMenu.addEventListener('click', function() {
	console.log('hiciste click en menu')
	contentDiv.innerHTML = "";
	generateMenu();
});
*/

contentDiv.addEventListener('click', function(event) {
    const clickedElement = event.target;

    // Verifica si el clic ocurrió en un elemento <li>
    if (clickedElement.tagName === 'LI') {
        const liId = clickedElement.id;

        // Ahora puedes realizar acciones basadas en el ID del <li> clicado
        console.log(`Hiciste clic en el elemento con ID: ${liId}`);

        // Realiza otras acciones según sea necesario
        contentDiv.innerHTML = "";
        if (liId === 'liHome') {
            generateHome();
        } else if (liId === 'liMenu') {
            generateMenu();
        } else if (liId === 'liContact') {
        	generateContact();
        }
    }
});


