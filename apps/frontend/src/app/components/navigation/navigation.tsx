import { Link } from 'react-scroll';

import { FC, useEffect, useState } from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import logo from 'libs/ui-design/src/lib/assets/images/leo_logo_light.png';

import styles from './navigation.module.scss';
import { Button } from '@ui-design';

import { NavigationBanner, DefaultDocTitle } from '@enums';

export interface NavigationProps {
  navLink: string;
  navShow: boolean;
  translateShow: string;
  windowWidth: number;
  btnMenuOpen: boolean;
}

export const Navigation: FC = () => {
  //resume link

  const resumeLink =
    'https://docs.google.com/document/d/1s5E9deudqrhGrQxXraemvTaRIyFKq4Y9/edit?usp=sharing&ouid=110120993496532886738&rtpof=true&sd=true';
  const openLink = (link: string) => window.open(link);

  //changing title
  const defaultDocTitle: string = DefaultDocTitle.title;

  const [docTitle, setDoctTitle] = useState(defaultDocTitle);
  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  const handlerDocTitle = (title: string) => {
    setDoctTitle((previous) => (previous = `${defaultDocTitle} - ${title}`));
    setNavShow(false);
  };

  //navigation data
  const navLinkArr = Object.values(NavigationBanner);

  const [navShow, setNavShow] = useState(false);
  const [styleTranslate, setStyletranslate] = useState('translateX(100%)');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLogo, setShowLogo] = useState(false);
  // const btnClassName = btnMenuOpen ? 'btnLinesChange' : 'btnLines';

  //toggle button handler
  function toggleBtn() {
    setNavShow((previousValue) => !previousValue);
  }

  useEffect(() => {
    setStyletranslate(navShow || windowWidth > 768 ? 'translateX(0)' : 'translateX(100%)');
    setShowLogo(windowWidth > 768 ? false : true);
  }, [navShow, windowWidth]);

  // when resizing window, getting the width of window
  useEffect(() => {
    function getWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  return (
    <nav>
      {navShow && <div onClick={toggleBtn} className={styles.blurBackground}></div>}

      <div className={styles.navHeaderPanel}>
        <Link
          to={'home'}
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          onClick={() => handlerDocTitle('Home')}
        >
          <img width={500} src={logo} alt="logo" />
        </Link>

        <div style={{ transform: `${styleTranslate}` }} className={`${styles.rightSide}`}>
          {showLogo && (
            <Link
              to={'home'}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              onClick={() => handlerDocTitle('Home')}
            >
              <img src={logo} alt="logo" className={styles.logo} />
            </Link>
          )}

          <ul>
            {navLinkArr.map((item, index) => (
              <li key={index}>
                <Link
                  to={item}
                  onClick={() => handlerDocTitle(item)}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            label="Resume"
            variant="primary"
            onClick={() => openLink(resumeLink)}
            className={styles.btnResume}
          />
        </div>

        {
          <button onClick={toggleBtn} className={styles.btnToggle}>
            <span className={navShow ? styles.btnLinesChange : styles.btnLines}></span>
            <span className={navShow ? styles.btnLinesChange : styles.btnLines}></span>
            <span className={navShow ? styles.btnLinesChange : styles.btnLines}></span>
          </button>
        }
      </div>
    </nav>
  );
};
