import { FC } from 'react';
import cn from 'classnames';
import styles from './typography.module.scss';

export interface TypographyComponentProps {
  component?: string | (() => JSX.Element);

  className?: string;

  children: React.ReactNode;

  variant:
    | `header1`
    | `header2`
    | `header3`
    | `header4`
    | `paragraph`
    | `header5`
    | `input`
    | `button`
    | `subtext`
    | `label`;

  paragraph?: boolean;

  display?: 'initial' | 'block' | 'inline';

  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

const variantsMapping = {
  header1: 'h1' as const,
  header2: 'h2' as const,
  header3: 'h3' as const,
  header4: 'h4' as const,
  paragraph: 'p' as const,
  header5: 'h5' as const,
  input: 'span' as const,
  button: 'span' as const,
  subtext: 'span' as const,
  label: 'span' as const,
};

const displayMapping = {
  initial: 'displayInitial' as const,
  block: 'displayBlock' as const,
  inline: 'displayInline' as const,
};

export const Typography: FC<TypographyComponentProps> = (props) => {
  const {
    align = 'inherit',
    children,
    variant,
    paragraph,
    display = 'block',
    className,
    ...otherProps
  } = props;

  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    <Component
      className={cn(
        styles.root,
        styles[variant],
        styles[displayMapping[display]],
        styles[align],
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default Typography;
