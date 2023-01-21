import React, { FC } from 'react';
import { Typography } from '@ui-design';
import styles from './featured-project.module.scss';
import cn from 'classnames';
import { ImGithub as IconGithub } from 'react-icons/im';
import { HiOutlineExternalLink as IconExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useAnimate } from '@ui-design';

export interface ProjectProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  style?: React.CSSProperties;
  children?: React.ReactNode;

  title: string;
  descriptionText: string;
  usedTools: string[];
  githubLink?: string;
  externalLink: string;
  imageLink: string;
  learnMoreLink?: string;
}

export const FeaturedProject: FC<ProjectProps> = (props) => {
  const { title, descriptionText, usedTools, githubLink, externalLink, imageLink, children } =
    props;

  const handlerClick = (link?: string) => window.open(link);

  const getVariant = (props: ProjectProps) => {
    switch (props.variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      default:
        return styles.primary;
    }
  };

  const renderDetails = () => {
    return (
      <div className={styles.projectDetails}>
        <span>
          <Typography className={styles.featuredText} variant="header4">
            Featured Project
          </Typography>
        </span>
        <span onClick={() => handlerClick(externalLink)}>
          <Typography className={styles.title} variant="header2">
            {title}
          </Typography>
        </span>

        {
          <Typography variant="paragraph" className={styles.discriptions}>
            {descriptionText}
          </Typography>
        }
        <span>
          <ul className={styles.usedTools}>
            {usedTools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </span>

        {githubLink && externalLink && (
          <span className={styles.iconLink}>
            {githubLink && (
              <IconGithub onClick={() => handlerClick(githubLink)} className={styles.iconGithub} />
            )}
            {externalLink && (
              <IconExternalLink
                onClick={() => handlerClick(externalLink)}
                className={styles.iconExternalLink}
              />
            )}
          </span>
        )}

        {children && <span className={styles.button}>{children}</span>}
      </div>
    );
  };

  const renderImage = () => {
    return (
      <div onClick={() => handlerClick(externalLink)} className={styles.projectImage}>
        <img src={imageLink} alt={title} />
      </div>
    );
  };

  return (
    <motion.div
      variants={useAnimate(0, 0.5)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 'some' }}
      style={props.style}
      className={cn(styles.featuredProject, styles.className, getVariant(props))}
    >
      {renderDetails()}
      {renderImage()}
    </motion.div>
  );
};
