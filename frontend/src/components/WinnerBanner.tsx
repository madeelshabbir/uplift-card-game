import React from 'react';
import { ReactComponent as Winner } from '../assets/images/winner.svg';
import styles from '../stylesheets/WinnerBanner.module.css';

const WinnerBanner: React.FC = () => {
  return (
    <div className={styles.winnerBanner}>
      <Winner className="sm:w-150 lg:w-300" />
    </div>
  );
};

export default WinnerBanner;
