const pokemon = ["Pikachu", "Charmander", "Charmeleon", "Charizar","Bulbasaur","Ivysaur","Venosaur","Squirttle", "Wartottle", "Blastoise"];


function mostrar() {

    document.getElementById("pokedex").innerHTML = pokemon;
}

function anadir() {

    pokemon[pokemon.length] = document.getElementById("entrada").value;
    document.getElementById("pokedex").innerHTML = pokemon;
}

function eliminar() {

     pokemon.pop();
}

function ordenar() {

    pokemon.sort();
}

function ordenar2 () {
    pokemon.sort();
    pokemon.reverse();
}

function buscar() {
    elemento = document.getElementById("entrada").value;
    let position = pokemon.lastIndexOf(elemento) + 1;
    document.getElementById("pokedex").innerHTML = elemento + " esta en " + position;
}