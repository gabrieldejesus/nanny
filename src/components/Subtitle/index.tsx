import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export default function Subtitle({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <h3 {...rest} className={cn(styles.subtitle, className)}>
      {children}
    </h3>
  );
}
