import { FC, useEffect, useRef, useState } from 'react';
import styles from './tab.module.scss';
import { Typography } from '@ui-design';
import cn from 'classnames';

export interface tabProps {
  tabHeader: string[];
  tabContent: React.ReactNode[];
}

export const Tab: FC<tabProps> = ({ tabHeader, tabContent }) => {
  const [activeLink, setActiveLink] = useState(0);
  const tabList = useRef<HTMLLIElement | null>(null);
  const [tabListWidth, setTabListWidth] = useState(tabList.current?.clientWidth);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    setTabListWidth(tabList.current?.clientWidth);
  }, [windowWidth]);

  useEffect(() => {
    const getWindowWidth = () => {
      setWindowWidth((previous) => (previous = window.innerWidth));
    };

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  const reanderTabHeader = () => {
    return (
      <div className={styles.tabHeader}>
        <ul>
          {tabHeader.map((item, index) => (
            <Typography variant="paragraph" key={index}>
              <li
                ref={tabList}
                className={cn(styles.tabHeaderList, index === activeLink && styles.tabActive)}
                onClick={() => setActiveLink((previous) => (previous = index))}
              >
                {item}
              </li>
            </Typography>
          ))}
        </ul>

        <span
          className={styles.tabIndicatorParent}
          style={{
            width:
              windowWidth <= 768 ? `${tabListWidth && tabHeader.length * tabListWidth}px` : '1px',
            height: windowWidth <= 768 ? '1px' : `${tabHeader.length * 50}px`,
          }}
        >
          <span
            className={styles.tabIndicator}
            style={{
              left: windowWidth <= 768 ? `${tabListWidth && activeLink * tabListWidth}px` : `0`,
              top: windowWidth <= 768 ? `-1px` : `${activeLink * 50}px`,
              width: windowWidth <= 768 ? `${tabListWidth}px` : '3px',
              height: windowWidth <= 768 ? `3px` : '50px',
            }}
          ></span>
        </span>
      </div>
    );
  };

  const renderTabBody = () => {
    return <div className={styles.tabBody}>{tabContent[activeLink]}</div>;
  };
  return (
    <div className={styles.tab}>
      {reanderTabHeader()}
      {renderTabBody()}
    </div>
  );
};
