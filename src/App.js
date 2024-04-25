import styles from '../src/App.css';
import Root from './components/Root';
import HomePage from './components/pages/HomePage.jsx';
import Game from './components/pages/Game.jsx';
import NotFound from './components/pages/NotFound.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route index element={ <HomePage /> } />
    <Route path='game' element={ <Game /> } />
    <Route path='*' element={ <NotFound /> } />
  </Route>
));

export default function App() {
  return (
    <div className={styles.App}>
      <RouterProvider router={ router } />
    </div>
  );
}
