import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import styles from './pokemon.module.css';
import Pokeball from '../assets/pokeball.png';
import Footer from '../components/Footer';
import { PokemonDetails } from '../types/types';
import {fetchPokemon} from '../api/fetchPokemon';
import { waitFor } from '../utils/utils';
import {convertGramsToKilograms} from '../utils/utils';
import {convertCentimeterstoMeters} from '../utils/utils';
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
                <img src={pokemon?.imgSrc} alt=""  className={styles.pokemoninfoimg} />
            </div>
            <div className={styles.content}>
                <div className={styles.hpbar}></div>
                <div>
                    {pokemon?.hp} / {pokemon?.hp} HP
                </div>
                <div className={styles.column}>
                    <div className={styles.row}>
                        {convertGramsToKilograms(pokemon?.weight)} Kg
                        <span className={styles.text}>Weight</span>
                    </div>
                    <div className={styles.row}>
                        <span className={pokemon?.type} >
                            {pokemon?.type} 
                        </span>
                        <span className={pokemon?.type2}>
                            {pokemon?.type2}
                        </span>
                    </div>
                    <div className={styles.row}>
                        {convertCentimeterstoMeters(pokemon?.height)} m
                        <span className={styles.text}>Height</span>
                    </div>
                </div>
                <div className= {styles.abilities}>
                    <span>Ability</span>
                    <span>{pokemon?.ability}</span>
                </div>
            </div>
        </main>
    </div>
    <Footer />
    </>
    );
};

export default Pokemon;