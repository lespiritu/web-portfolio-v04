import React, { FC } from 'react';
import styles from './section.module.scss';
import cn from 'classnames';
import { Typography } from '@ui-design';

import { motion } from 'framer-motion';
import { useAnimate } from '@ui-design';

export interface sectionProps {
  title?: string;
  sectionNumber?: string;
  variant?: 'primary' | 'centered';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  name: string;
}

export const Section: FC<sectionProps> = (props) => {
  const { title, sectionNumber, variant, children, style } = props;

  function getVariant(props: sectionProps) {
    switch (variant) {
      case 'primary':
        return styles.headerPrimary;
      case 'centered':
        return styles.headerCentered;
      default:
        return styles.headerPrimary;
    }
  }

  const renderSectionHead = () => {
    return (
      <motion.div
        variants={useAnimate(0, 0.5)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 'some' }}
        className={cn(props.className, styles.sectionHeader, getVariant(props))}
      >
        {variant === 'primary' && <span className={styles.number}>{sectionNumber}</span>}

        <span className={styles.title}>
          <Typography variant="header2">{title}</Typography>
        </span>
        {variant === 'primary' && <span className={styles.line}></span>}
      </motion.div>
    );
  };

  const renderSectionBody = () => {
    return <div className={styles.sectionBody}>{children}</div>;
  };

  return (
    <div id={props.name} style={style} className={cn(styles.section, props.className)}>
      {renderSectionHead()}
      {renderSectionBody()}
    </div>
  );
};
