import cn from 'classnames';
import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  className?: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const getVariantClass = (props: ButtonProps) => {
  switch (props.variant) {
    case 'primary':
      return styles.primary;
    case 'secondary':
      return styles.secondary;

    case 'outline':
      return styles.outline;

    default:
      return styles.primary;
  }
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={cn(props.className, styles.button, getVariantClass(props))}
      onClick={props.onClick}
      onFocus={props.onFocus}
    >
      {props.label}
    </button>
  );
};
