import { Link, NavLink } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import styles from './Header.module.css'



export const Header =()=>{
    return <header className={styles.header}>

        <Link to="/">
            <div ><BiCameraMovie className={styles.headerIcon}/></div>
            </Link>
            <nav>
                <NavLink className={styles.headerLink} to='/'>HOME</NavLink>
                <NavLink className={styles.headerLink} to='/movies'>MOVIES</NavLink>
            </nav>

    </header>
};