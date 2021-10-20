import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export default function Container({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn(styles.container, className)} {...rest}>
      {children}
    </div>
  );
}
