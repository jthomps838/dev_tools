import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

import AsideMenu from '../AsideMenu/AsideMenu';
import PageLayout from '../PageLayout/PageLayout';
import './toolsLayout.css';

const ToolsLayout = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    if (!isAuthenticated) return navigate('/');
    return (
        <PageLayout>
            <section className='main-content'>
                <AsideMenu />
                {children}
            </section>
        </PageLayout>
    );
};

export default ToolsLayout;
