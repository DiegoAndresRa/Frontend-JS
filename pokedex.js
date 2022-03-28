const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./images/failed.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let pokeT = data.types[0].type.name;
            console.log(pokeT);
            pokeType(pokeT);
            let pokeNames = data.name;
            console.log(pokeNames);
            pokeN(pokeNames);
            let stads = [];
            for(var i = 0; i < 6;i++){
                stads[i]=data.stats[i].base_stat;
                console.log(stads[i]);
            }
            pokeStad(stads);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImage");
    pokePhoto.src = url;
}
const pokeN = (namePokemon) => {
    const name = document.getElementById("Name");
    name.innerHTML = namePokemon;
}
const pokeType = (type) => {
    const typePokemon = document.getElementById("typePokemon");
    typePokemon.innerHTML = type.toUpperCase();
}
function pokeStad (stads){
    const nameStads = ["hp","atk","def","sp_atk","sp_def","speed"];
    for(var j = 0; j < 6; j++){
        var std = document.getElementById(nameStads[j]);
        std.innerHTML = stads[j];
    }
}