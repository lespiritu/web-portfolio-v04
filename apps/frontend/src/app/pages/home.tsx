import { FC } from 'react';
import { ExperienceTab, Intro, Navigation } from '../components';
import { CardList } from '../components';
import styles from './home.module.scss';
import cn from 'classnames';
import { Section } from '@ui-design';
import { FeaturedProjectList } from '../components';
import { Footer } from '../components';
import { Contact } from '../components/contact';

export const Home: FC = () => {
  return (
    <div>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={cn(styles.main, styles.fillHeight)}>
        <Section variant="primary" name="Home">
          <Intro />
        </Section>
        <Section
          name="Projects"
          sectionNumber="01."
          title="Some Thing I've Built"
          variant="primary"
        >
          <FeaturedProjectList />
        </Section>

        <Section
          name="Project Gallery"
          sectionNumber="02."
          title="Other Noteworthy Projects"
          variant="centered"
        >
          <div>
            <CardList />
          </div>
        </Section>

        <Section
          name="Work"
          className={styles.sectionExperienceTab}
          sectionNumber="03."
          title="Working Experience"
          variant="primary"
        >
          <ExperienceTab />
        </Section>

        <Section name="Contact" variant="centered" title="Contact">
          <Contact />
        </Section>

        <Footer />
      </main>
    </div>
  );
};
