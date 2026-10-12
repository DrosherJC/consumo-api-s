const btnSeleccionar = async ()=>{
    try {
        const pokemon = Math.floor(Math.random()*151)+1

        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        const response = await request.json();

        //Desempaquetar los datos y mostrar la información
        const lista = document.getElementById("listarpokemon");

        const item = lista.querySelector("#pok-1")

        //Mostrar la imagen
        item.querySelector("img").src= response.sprites.front_default;

        //Mostrar el nombre
        item.querySelector("p").textContent = response.name;

        //Mostrar las habilidades

        const habilidades = response.abilities.map( hab => `<li>${hab.ability.name}</li>`).join("");

        item.querySelector("ol").innerHTML = habilidades



    } catch (error) {
        console.log("Error:"+error);
    }

}

btnSeleccionar()