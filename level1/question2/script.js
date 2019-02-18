

/* lager  en div med class container i root'en */
const info = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
info.appendChild(container);

/* Requester JSON filen */
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

/* funksjon for hva som skal gjøres med JSON fil når den lastes*/
request.onload = function () {

  var data = JSON.parse(this.response); // gjør om til JS objekt


/* hvis vellyket status, mellom 200 og 399, display det under*/
if (request.status >= 200 && request.status < 400){
  /*gjør dette for hver enkelt */
  data.forEach( main => {
    const card = document.createElement('div'); // lag en div
    card.setAttribute('class', 'card'); // gi class card til div

    const h1 = document.createElement('h1'); // lag en h1
    h1.textContent = main.id; // ha id'ene til json inne i h1

    const p = document.createElement('p'); // lag en p
   p.textContent = main.title;// ha titlene til json inni p

   container.appendChild(card);

   card.appendChild(h1);
   card.appendChild(p);
  });
}

else {
alert("error, try again later");
}
  }


// Send request
request.send();
