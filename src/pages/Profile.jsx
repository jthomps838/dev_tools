import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton/Logout';
import PageLayout from '../components/PageLayout/PageLayout';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;

    if (!isAuthenticated) return navigate('/');
    return (
        <PageLayout>
            <h1>Hello {user?.name}</h1>
            <LogoutButton />
        </PageLayout>
    );
};

export default Profile;
