import { Link } from 'react-router-dom';
import './asideMenu.css';

const AsideMenu = () => {
    return (
        <aside className='aside-menu'>
            <section className='container'>
                <h1 className='aside-header'>Tools</h1>
                <Link
                    className='btn'
                    to='/flashcards'
                >
                    Flashcards
                </Link>
                <Link
                    className='btn'
                    to='/boards'
                >
                    Kanban Boards
                </Link>
                <Link
                    className='btn'
                    to='/quiz'
                >
                    Quizzes
                </Link>
            </section>
            <section className='container'>
                <h1 className='aside-header'>Study</h1>
                <h2 className='aside-sub-header'>Internal</h2>
                <Link
                    className='btn'
                    to='/algos'
                >
                    Visualize Algorithms
                </Link>
                <h2 className='aside-sub-header'>External</h2>
                <a href='https://www.udemy.com/'>Udemy</a>
                <a href='https://www.youtube.com/'>YouTube</a>
            </section>
            <section className='container'>
                <h1 className='aside-header'>Quick Links</h1>
                <a href='https://leetcode.com/'>LeetCode</a>
                <a href='https://www.hackerrank.com/dashboard'>HackerRank</a>
                <a href='https://github.com/'>Github</a>
                <a href='https://www.linkedin.com/'>LinkedIn</a>
            </section>
        </aside>
    );
};

export default AsideMenu;
