import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


import './Header.css'

function Header({ user, onLogout }) {
    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
    };
    const handleLogin = () => {
        // Lógica de inicio de sesión
        console.log('Iniciar sesión');
    };

    return (
        <header>
            <nav>
                <Link to="/" style={{ marginRight: '1rem' }}>
                    <img src={logo} alt="Logo" style={{ height: '3em' }} />
                </Link>
                
                <Link className='buscador' to="/lista" style={{ marginRight: '1rem' }}>Buscador</Link>
                <Link className='mapa' to="/mapa" style={{ marginRight: '1rem' }}>Mapa</Link>
                <Link className='about' to="/about">Quienes somos</Link>
                
                <span style={{ marginLeft: 'auto', marginRight: '1rem', float: 'right' }}>

                    <Link to="/perfil" style={{ marginRight: '1rem' }}>
                        Perfil
                    </Link>

                    {!user ? (
                        <>
                            <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
                            <Link to="/registro">Registro</Link>
                        </>
                    ) : (
                        <>
                            <span style={{ marginRight: '1rem' }}>
                                Bienvenido, <Link to="/perfil">{user}</Link>
                            </span>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </>
                    )}

                </span>
            </nav>
        </header>
    );
}

export default Header;