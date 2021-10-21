import { Button } from 'reakit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container, Paragraph, Separator, Subtitle } from '@/components';

import styles from './styles.module.css';

export type RequestData = {
  name: string;
  email: string;
};

export default function Newsletter() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`Name is required`),
    email: Yup.string().required(`Email is required`).email(`Email is invalid`),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit } = useForm(formOptions);

  async function onSubmit(data: RequestData) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: `POST`,
      body: JSON.stringify(data, null, 4),
      headers: {
        'Content-Type': `application/json`,
      },
    });
  }

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
            placeholder="Your name"
            {...register(`name`)}
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
