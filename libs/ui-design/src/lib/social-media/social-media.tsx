import cn from 'classnames';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css';

import styles from './social-media.module.scss';

import {
  FaGithub as IconGitHub,
  FaLinkedinIn as IconIn,
  FaInstagram as IconInstagram,
  FaYoutube as IconYoutube,
  FaGitlab as IconGitLab,
  FaTwitter as IconTwitter,
  FaCodepen as IconCodepen,
} from 'react-icons/fa';

import React, { FC } from 'react';

export interface SocialMediaProps {
  githubLink?: string;
  instagramLink?: string;
  inLink?: string;
  youtubeLink?: string;
  gitlabLink?: string;
  twitterLink?: string;
  codepenLink?: string;

  style?: React.CSSProperties;
  className?: string;
}

export const SocialMedia: FC<SocialMediaProps> = (props) => {
  const { githubLink, inLink, instagramLink, youtubeLink, gitlabLink, twitterLink, codepenLink } =
    props;
  const linkHandler = (link: string) => window.open(link);
  return (
    <div style={props.style} className={cn(styles.container, props.className)}>
      {githubLink && (
        <Tippy content="Github" theme="light">
          <span>
            <IconGitHub className={styles.icon} onClick={() => linkHandler(githubLink)} />
          </span>
        </Tippy>
      )}
      {inLink && (
        <Tippy content="LinkedIn" theme="light">
          <span>
            <IconIn className={styles.icon} onClick={() => linkHandler(inLink)} />
          </span>
        </Tippy>
      )}
      {instagramLink && (
        <Tippy content="Instagram" theme="light">
          <span>
            <IconInstagram className={styles.icon} onClick={() => linkHandler(instagramLink)} />
          </span>
        </Tippy>
      )}
      {youtubeLink && (
        <Tippy content="Youtube" theme="light">
          <span>
            <IconYoutube className={styles.icon} onClick={() => linkHandler(youtubeLink)} />
          </span>
        </Tippy>
      )}
      {gitlabLink && (
        <Tippy content="Gitlab" theme="light">
          <span>
            <IconGitLab className={styles.icon} onClick={() => linkHandler(gitlabLink)} />
          </span>
        </Tippy>
      )}
      {twitterLink && (
        <Tippy content="Twitter" theme="light">
          <span>
            <IconTwitter className={styles.icon} onClick={() => linkHandler(twitterLink)} />
          </span>
        </Tippy>
      )}

      {codepenLink && (
        <Tippy content="Codepen" theme="light">
          <span>
            <IconCodepen className={styles.icon} onClick={() => linkHandler(codepenLink)} />
          </span>
        </Tippy>
      )}
    </div>
  );
};
