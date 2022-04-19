import React from 'react';
import './NavBar.css'

function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
                <li>Kimcakescss</li>
                <a href="#">Tortas</a>
                <a href="#">Cupcakes</a>
                <a href="#">Galletas</a>
            </ul>
        </div>
    );
}

export default NavBar;