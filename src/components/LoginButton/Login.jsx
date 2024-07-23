import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <p
            className='btn login'
            onClick={loginWithRedirect}
        >
            Login
        </p>
    );
};

export default LoginButton;
