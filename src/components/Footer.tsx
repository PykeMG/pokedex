import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import PokemonPic from '../assets/pikachu.png';
import Pokeball from '../assets/pokeball.png';
import Pointer from '../assets/pointer.png';


const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPic} alt="pokeball"/>
                Pokemons
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={Pokeball} alt="pokeball"/>
                Items
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={Pointer} alt="pokeball"/>
                Map
            </Link>
        </footer>
    );
};

export default Footer;