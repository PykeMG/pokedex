import React, { useEffect } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './pokemons.module.css';
import {fetchPokemons} from '../api/fetchPokemons';
import { Pokemon } from '../types/types';

const Pokemons = () =>{
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons =async () => {
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
        };
    fetchAllPokemons();
    }, []);

    return(
        <>
        <Header query={query} setQuery={setQuery} />
        <main>
            <nav>
                {pokemons?.slice(0, 151).map((pokemon) => (
                <Link key={pokemon.id} className={styles.listItem} to={`/pokemons/${pokemon.name.toLowerCase()}`}>
                    <img src={pokemon.imgSrc} alt={pokemon.name} className={styles.listItemIcon} />
                    <div className={styles.listItemText}>
                        <span>{pokemon.name}</span>
                        <span>{pokemon.id}</span>
                    </div>
                </Link>
                ))};
            </nav>
        </main>
        <Footer />
        </>
    );
};

export default Pokemons;