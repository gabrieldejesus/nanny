import { AiOutlineLoading } from 'react-icons/ai';
import { IconBaseProps } from 'react-icons';

import styles from './styles.module.css';

export default function Spinner(props: IconBaseProps) {
  return <AiOutlineLoading className={styles.spinner} {...props} />;
}
