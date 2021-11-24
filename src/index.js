// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

//console.log(data);
//
/*  Exammple of creating a pokemon from lecture 

function createCard(src){
const bulbasar = document.createElement('div')
bulbasar.setAttribute('class', 'card')

const bulbasarfoto=document.createElement('img')
bulbasarfoto.setAttribute('src', src  )
bulbasarfoto.setAttribute('class', 'dragoni')
bulbasarfoto.setAttribute('alt', '')

bulbasar.append(bulbasarfoto)

const avatari =document.querySelector('.cards')
avatari.append(bulbasar)
}

createCard(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    
)*/



/* List to be based on for the project 
<li class="card">
    <h2 class="card--title">Bulbasaur</h2>
    <img
      width="256"
      class="card--img"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    />
    <ul class="card--text">
      <li>HP: 45</li>
      <li>ATTACK: 49</li>
      <li>DEFENSE: 49</li>
      <li>SPECIAL-ATTACK: 65</li>
      <li>SPECIAL-DEFENSE: 65</li>
      <li>SPEED: 45</li>
    </ul>
  </li>
  */

  function createPokemonCards(){
  const liEl = document.createElement("li")
  liEl.setAttribute('class', 'card')

  const nameEl = document.createElement('h2')
  nameEl.textContent=data[0].name

  const avatarEl=document.createElement('img')
  avatarEl.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    
  const ulEl=document.createElement('ul')
  ulEl.setAttribute('class', 'card--text')   


  liEl.append(nameEl,avatarEl,ulEl)

  const listEl = document.querySelector('.card')
  listEl.append(liEl)


  const listInsideUlist1=document.createElement("li")
  listInsideUlist1.textContent= 'HP: 45'

  const listInsideUlist2=document.createElement("li")
  listInsideUlist2.textContent= 'ATTACK: 49'

  const listInsideUlist3=document.createElement("li")
  listInsideUlist3.textContent= 'DEFENSE: 49'

  const listInsideUlist4=document.createElement("li")
  listInsideUlist4.textContent= 'SPECIAL-ATTACK: 65'

  const listInsideUlist5=document.createElement("li")
  listInsideUlist5.textContent= 'SPECIAL-DEFENSE: 65'

  const listInsideUlist6=document.createElement("li")
  listInsideUlist6.textContent= 'SPEED: 45'

ulEl.append(listInsideUlist1,listInsideUlist2,listInsideUlist3,listInsideUlist4,listInsideUlist5,listInsideUlist6)
  }
  createPokemonCards()
  
  