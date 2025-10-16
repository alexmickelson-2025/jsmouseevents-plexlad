import { animals } from "./animals.js";

console.log(animals[0]);
"this".toLowerCase();

function renderAnimalCard(animal) {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = animal.image;
  image.alt = animal.title;

  const cardText = document.createElement("div");
  cardText.className = "card-text";

  const title = document.createElement("h3");
  title.textContent = animal.title;

  const text = document.createElement("p");
  // using 250 here for consistent sizing
  text.textContent = animal.description.slice(0, 250) + "...";
  
  card.addEventListener("mouseover", () => {
    text.textContent = animal.description;
  });
  card.addEventListener("mouseout", () => {
    text.textContent = animal.description.slice(0, 250) + "...";
  });

  cardText.appendChild(title);
  cardText.appendChild(text);
  card.appendChild(image);
  card.appendChild(cardText);
  return card;
}

function renderCards(animals) {
  const animalCards = animals.map((animal) => {
    return renderAnimalCard(animal);
  });
  const cardContainer = document.getElementById("card-container");
  cardContainer.replaceChildren(...animalCards);
}

renderCards(animals);
