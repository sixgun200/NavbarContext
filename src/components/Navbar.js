import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import NavbarContext from '../context/NavbarContext'

const Navbar = () => {
    const context = useContext(NavbarContext);

    return (
        <div className={styles.navBar}>
            <h1>Hi {context.person}!</h1>
        </div>
    );
}

export default Navbar;
