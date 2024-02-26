import styles from '../src/App.css';
import Header from "./components/Header.jsx";
import Field from './components/Field.jsx';
import MovementButtons from './components/MovementButtons';

export default function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Field />
      <MovementButtons />
    </div>
  );
}
