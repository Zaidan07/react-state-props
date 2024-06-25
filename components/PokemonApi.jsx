import { useState, useEffect } from "react";
import { Title, Wrapper, Image, List } from "./PokemonApi.styled";



export default function PokemonApi() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      const apiGet = await fetch("https://pokeapi.co/api/v2/pokemon");
      const getTransl = await apiGet.json();
      console.log();
      setPokemon(getTransl.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);
  return <div>  
    <Wrapper color="black">
        
    <ul>
        {/* {pokemon.map((items, index) => (
            <List type="fire" key={index}>
                <Title color="pink">{items.name}</Title>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}></Image>
            </List>
        ))} */}

        <List type="fire">
            Halo Dunia
        </List>
        <List type="water">
            Halo Dunia
        </List>
        <List type="earth">
            Halo Dunia
        </List>
        <List type="wind">
            Halo Dunia
        </List>
    </ul>
    </Wrapper>
  </div>;
}
