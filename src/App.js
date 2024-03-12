import styles from '../src/App.css';
import Header from './components/Header.jsx';
import StartingForm from './components/StartingForm.jsx';

export default function App() {
  return (
    <div className={styles.App}>
      <Header />
      <StartingForm />
    </div>
  );
}
