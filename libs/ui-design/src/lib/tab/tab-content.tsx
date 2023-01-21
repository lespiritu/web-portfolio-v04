import { FC } from 'react';
import styles from './tab-content.module.scss';
import { Typography } from '@ui-design';
import { motion } from 'framer-motion';
import { useAnimate } from '@ui-design';

export interface TabContentProps {
  title?: string;
  subTitle?: string;
  content?: string;
  listContent?: string[];
}
export const TabContent: FC<TabContentProps> = (props) => {
  const { title, subTitle, listContent, content } = props;

  return (
    <motion.div
      variants={useAnimate(0, 0.5)}
      initial="offscreen"
      animate="onscreen"
      className={styles.tabContent}
    >
      {title && (
        <Typography variant="header2">
          <span className={styles.title}>{title}</span>
        </Typography>
      )}
      {subTitle && (
        <Typography variant="header4">
          <span className={styles.subTitle}>{subTitle}</span>
        </Typography>
      )}
      {content && (
        <Typography variant="paragraph" className={styles.descriptions}>
          {content}
        </Typography>
      )}
      {listContent && (
        <ul className={styles.listContent}>
          {listContent.map((item, index) => (
            <Typography variant="paragraph" key={index}>
              <li>{item}</li>
            </Typography>
          ))}
        </ul>
      )}
    </motion.div>
  );
};
