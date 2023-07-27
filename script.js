// API LINK : https://api.blablagues.net/?rub=blagues

// On pointe nos balises HTML
const header = document.getElementById("header");
const content = document.getElementById("content");

// text_head = Le titre de la blague
// text = Le contenu de la blague
// text = "" c'est un contenu vide
// text_hidden = c'est un contenu cacher
// On récupère le text_head et on l'injecte dans notre élément header
// On récupère le text ou text_hidden et on l'injecte dans notre élément content
// Si tu as un text affiche-le sinon tu as un text_hidden affiche le (condition ternaire)

// Crée la fonction getJoke() avec toute notre logique de fetch()
const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content; // Contenu des données qu'on englobe dans notre variable joke
      header.textContent = joke.text_head; // On récupère le text_head et on l'injecte dans notre élément header
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden; // Condition ternaire
    });
};

getJoke(); // Appel de la fonction pour l'initialiser

//Appel de la fonction à chaque fois qu'on clique sur le body
document.body.addEventListener("click", () => {
  getJoke();
});
