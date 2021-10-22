import { Button } from 'reakit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import {
  Container,
  Paragraph,
  Separator,
  Spinner,
  Subtitle,
} from '@/components';

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);

  async function onSubmit(data: RequestData) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: `POST`,
        body: JSON.stringify(data, null, 4),
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      toast(`Registered successfully!`);
    } catch (err) {
      toast.error(`Unexpected error, try again in a few minutes`);
    }
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
          <div className={styles.wrapper}>
            <input
              type="text"
              placeholder="Your name"
              {...register(`name`)}
              className={styles.input}
              disabled={isSubmitting}
              required
            />
            {errors.name && (
              <span
                data-aos-delay="50"
                data-aos="fade-right"
                className={styles.error}
              >
                {errors.name.message}
              </span>
            )}
          </div>

          <div className={styles.wrapper}>
            <input
              type="email"
              {...register(`email`)}
              placeholder="Your email"
              className={styles.input}
              disabled={isSubmitting}
              required
            />

            {errors.email && (
              <span
                data-aos-delay="50"
                data-aos="fade-right"
                className={styles.error}
              >
                {errors.email.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
            style={{
              background: isSubmitting ? `var(--dark-grey)` : `var(--green)`,
            }}
          >
            {isSubmitting ? <Spinner /> : `Send`}
          </Button>
        </form>
      </Container>

      <Separator direction="down" />
    </section>
  );
}
