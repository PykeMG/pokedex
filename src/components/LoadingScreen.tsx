import Pokedex from "../assets/pokedex.png";
import styles from "./loadingScreen.module.css";

const LoadingScreen = () => {
    return <div className={styles.loadingScreen}>
        <img className={styles.loadingScreenIcon} src={Pokedex} alt="" />
        </div>
};

export default LoadingScreen;