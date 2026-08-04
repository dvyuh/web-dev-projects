async function fetchdata(){
    try{
        const pokemonname = document.getElementById("pokename").value.toLowerCase();
        const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)

        if(!respone.ok){
            throw new Error("could not fetch resource");
        }

        const data = await respone.json();
        const pokemonsprite = data.sprite.front_default;
        const imgElement = document.getElementById("pokesprite");

        imgElement.src = pokemonsprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}