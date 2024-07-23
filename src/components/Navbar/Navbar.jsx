import { useAuth0 } from '@auth0/auth0-react';

import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton/Logout';
import './navbar.css';

const Navbar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading)
        return (
            <header className='header-skeleton'>
                <section className='logo-skeleton'></section>
            </header>
        );

    return (
        <header className='main-header'>
            <Link
                to='/'
                className='logo'
            >
                Logo
            </Link>
            <section className='profile-tool-bar'>
                <Link
                    className='btn'
                    to='/'
                >
                    Home
                </Link>
                {!isAuthenticated ? (
                    <LoginButton />
                ) : (
                    <>
                        <Link
                            className='btn'
                            to='/tools'
                        >
                            Tools
                        </Link>
                        <LogoutButton />
                        <Link
                            to='/profile'
                            className='btn'
                        >
                            {user.given_name}
                        </Link>
                    </>
                )}
            </section>
        </header>
    );
};

export default Navbar;
