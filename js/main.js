const contenedorCards = document.getElementById("menu_cards"); 
let cardsHTML = ""; 
for (let producto in menu) 
{
    cardsHTML += crearCards(producto); 
}

contenedorCards.innerHTML = cardsHTML;

function crearCards(producto)
{
    let card = document.createElement('div');
    card.classList.add('card'); 

   
    let nombre = document.createElement('p'); 
    let image = document.createElement('img'); 

   

    nombre.innerText = menu[producto].nombre;

    image.src = menu[producto].image;

    card.append( nombre, image);

    return card.outerHTML;
}