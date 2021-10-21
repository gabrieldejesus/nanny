import cn from 'classnames';

import styles from './styles.module.css';

export type SeparatorProps = {
  direction: 'top' | 'down';
  className?: string;
};

export default function Separator({ direction, className }: SeparatorProps) {
  return (
    <hr className={cn(styles.separator, styles[direction], className)}></hr>
  );
}
