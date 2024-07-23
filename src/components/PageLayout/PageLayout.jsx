import Navbar from '../Navbar/Navbar';
import './pageLayout.css';

const PageLayout = ({ children }) => {
    return (
        <section id='app'>
            <Navbar />
            {children}
        </section>
    );
};

export default PageLayout;
