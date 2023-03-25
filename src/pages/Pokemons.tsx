import React, { useEffect } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './pokemons.module.css';
import {fetchPokemons} from '../api/fetchPokemons';
import { Pokemon } from '../types/types';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';

const Pokemons = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons =async () => {
            setIsLoading(true);
            await waitFor(1000);
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
            setIsLoading(false);
        };
    fetchAllPokemons();
    }, []);
    if (isLoading || !pokemons) {
        return <LoadingScreen />
    }
    const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })
    return(
        <>
        <Header query={query} setQuery={setQuery} />
        <main>
            <nav>
                {filteredPokemons?.slice(0, 151).map((pokemon) => (
                <Link key={pokemon.id} className={styles.listItem} to={`/pokemons/${pokemon.name.toLowerCase()}`}>
                    <img src={pokemon.imgSrc} alt={pokemon.name} className={styles.listItemIcon} />
                    <div className={styles.listItemText}>
                        <span>{pokemon.name}</span>
                        <span>Nro {pokemon.id}</span>
                        <div className={styles.types}>
                            <span className={pokemon.type}>{pokemon.type}</span>
                            <span className={pokemon.type2}>{pokemon.type2}</span>
                        </div>
                    </div>
                </Link>
                ))}
            </nav>
        </main>
        <Footer />
        </>
    );
};

export default Pokemons;