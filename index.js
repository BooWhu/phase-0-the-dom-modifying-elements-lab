
const header = document.querySelector('h1#victory');


if (header) {
  header.remove();
}


const newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.textContent = "${Elijah} is the champion"; 


document.body.appendChild(newHeader); 
