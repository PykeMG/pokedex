import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import styles from './pokemon.module.css';
import Pokeball from '../assets/pokeball.png';
import Footer from '../components/Footer';
import { PokemonDetails } from '../types/types';
import {fetchPokemon} from '../api/fetchPokemon';
import { waitFor } from '../utils/utils';
import LoadingScreen from '../components/LoadingScreen';

const Pokemon = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const { name } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<PokemonDetails>();

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true);
            await waitFor(1000);
            const fetchedPokemon = await fetchPokemon(name as string); 
            setPokemon(fetchedPokemon);
            setIsLoading(false);
        }
        getPokemon();
    }, [name]);

    if (isLoading || !pokemon) {
        return <LoadingScreen />
    }

    return (<>
    <button className={styles.pokeballbutton} onClick={() => navigate(-1)}>
        <img src={Pokeball}  alt="Pokeball" className={styles.pokemonimg} /> Go back
    </button>
    <div className={styles.pokemon}>
        <main className={styles.pokemoninfo}>
            <div className={styles.pokemontittle}>
                {pokemon?.name?.toUpperCase()}
            </div>
           
            <div>
                Nro. {pokemon?.id}
            </div>
            <div>
                <img src={pokemon?.imgSrc} alt=""  className={styles.pokemoninfoimg} />
            </div>
            <div>
                HP: {pokemon?.hp}
            </div>
            <div>
                Attack: {pokemon?.attack}
            </div>
            <div>
                Defense: {pokemon?.defense}
            </div>
            <div>
                Speed: {pokemon?.speed}
            </div>
        </main>
    </div>
    <Footer />
    </>
    );
};

export default Pokemon;