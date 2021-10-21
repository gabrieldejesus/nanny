import { Button } from 'reakit';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Container, Paragraph, Separator, Subtitle } from '@/components';

import styles from './styles.module.css';

export default function Newsletter() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState(``);

  const onSubmit = (data: any) => setResult(JSON.stringify(data));
  console.log({ result });

  return (
    <section className={styles.section}>
      <Separator direction="top" />

      <Container className={styles.container}>
        <div className={styles.headline}>
          <Subtitle className={styles.subtitle}>
            Are you a parent without a nanny and looking to share?
          </Subtitle>

          <Paragraph className={styles.paragraph}>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </Paragraph>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          data-aos-delay="200"
          data-aos="fade-up"
        >
          <input
            type="text"
            {...register(`name`)}
            placeholder="Your name"
            className={styles.input}
            required
          />

          <input
            type="email"
            {...register(`email`)}
            placeholder="Your email"
            className={styles.input}
            required
          />

          <Button type="submit" className={styles.button}>
            Send
          </Button>
        </form>
      </Container>

      <Separator direction="down" />
    </section>
  );
}
