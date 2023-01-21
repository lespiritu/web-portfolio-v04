import { FC, useEffect, useState } from 'react';
import styles from './page-loader.module.scss';
import cn from 'classnames';

export const PageLoader: FC = () => {
  const [pageLoaderClass, setPageLoaderClass] = useState('');

  useEffect(() => {
    const timerHidden = setTimeout(() => setPageLoaderClass(styles.hidden), 2000);
    const timerRemoved = setTimeout(() => setPageLoaderClass(styles.removed), 2500);

    return () => {
      clearTimeout(timerHidden);
      clearTimeout(timerRemoved);
    };
  }, []);

  return (
    <div className={cn(styles.pageLoader, pageLoaderClass)}>
      <div className={styles.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
