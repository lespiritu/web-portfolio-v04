import { Typography } from '@ui-design';
import styles from './intro.module.scss';
import avatar from './images/avatar.png';

export const Intro = () => {
  return (
    <section id="home" className={styles.intro}>
      <img className={styles.avatar} src={avatar} alt="" />

      <div>
        <Typography className={styles.greet} variant="header4">
          Hi, my name is
        </Typography>
        <Typography className={styles.name} variant="header1">
          Leoncio Espiritu
        </Typography>
        <Typography className={styles.title} variant="header3">
          Full-stack web developer
        </Typography>
        <Typography className={styles.story} variant="paragraph">
          I’m a web full-stack developer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I’m focused on web developement and continue
          learning.
        </Typography>
      </div>
    </section>
  );
};
