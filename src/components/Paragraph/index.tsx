import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export default function Paragraph({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <p
      {...rest}
      className={cn(styles.paragraph, className)}
      data-aos-delay="150"
      data-aos="fade-up"
    >
      {children}
    </p>
  );
}
