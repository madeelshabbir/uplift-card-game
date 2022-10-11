import Board from './containers/Board';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.body}>
      <Board />
    </div>
  );
};

export default App;
