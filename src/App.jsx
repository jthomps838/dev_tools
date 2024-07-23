import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BoardPage from './pages/BoardPage';
import BoardsPage from './pages/BoardsPage';
import AlgosPage from './pages/CommonAlgosPage';
import FlashcardPage from './pages/FlashcardPage';
import Home from './pages/Home';
import Proflie from './pages/Profile';
import QuizPage from './pages/QuizPage';
import Tools from './pages/Tools';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'profile',
        element: <Proflie />,
    },
    {
        path: 'tools',
        element: <Tools />,
    },
    {
        path: 'flashcards',
        element: <FlashcardPage />,
    },
    {
        path: 'boards',
        element: <BoardsPage />,
    },
    {
        path: 'boards:id',
        element: <BoardPage />,
    },
    {
        path: 'quiz',
        element: <QuizPage />,
    },
    {
        path: 'algos',
        element: <AlgosPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
