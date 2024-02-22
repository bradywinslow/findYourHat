import styles from '../src/App.css';
import Header from "./components/Header.jsx";
import Field from './components/Field.jsx';

export default function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Field />
    </div>
  );
}
