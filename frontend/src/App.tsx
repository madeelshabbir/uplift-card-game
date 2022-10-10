import styles from './App.module.css';
import Board from './containers/Board';

const App: React.FC = () => {
  return (
    <div className={styles.body}>
      <Board />
    </div>
  );
}

export default App;
