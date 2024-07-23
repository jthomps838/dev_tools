import { useAuth0 } from '@auth0/auth0-react';

import './logout.css';

const LogoutButton = () => {
    const { logout } = useAuth0();

    const handleLogout = () =>
        logout({ logoutParams: { returnTo: window.location.origin } });

    return (
        <p
            className='btn logout'
            onClick={handleLogout}
        >
            Logout
        </p>
    );
};

export default LogoutButton;
