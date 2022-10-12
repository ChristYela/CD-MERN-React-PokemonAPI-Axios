import React, { useState } from 'react';
import axios from 'axios';

const AxiosPokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const onClickHandler = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setPokemon(response.data.results)
            })
    }

    return (
        <div class="container">
            <h2>Pokémon Api with Axios</h2>
            <button class="bot" className='btn btn-outline-warning mb-4' onClick={() => onClickHandler()} >Gotta catch'em all Pokemon!</button>
            {pokemon.map((pokemon, index) => {
                return (<li key={index} className='text-primary'>{pokemon.name}</li>)
            })}
        </div>
    );
}
export default AxiosPokemon;