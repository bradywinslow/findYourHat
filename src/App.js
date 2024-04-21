import styles from '../src/App.css';
import Root from './components/Root';
import StartingForm from './components/StartingForm.jsx';
import Game from './components/Game.jsx';
import NotFound from './components/NotFound.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route index element={ <StartingForm/> } />
    <Route path='game' element={ <Game/> } />
    <Route path='*' element={ <NotFound/> } />
  </Route>
));

export default function App() {
  return (
    <div className={styles.App}>
      <RouterProvider router={ router } />
    </div>
  );
}
