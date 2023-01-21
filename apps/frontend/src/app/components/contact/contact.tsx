import styles from './contact.module.scss';
import { Button } from '@ui-design';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const form = useRef<HTMLFormElement>(null!);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = (e: any): void => {
    e.preventDefault();

    // emailjs.sendForm('service_tf11y1l', 'template_cexcgqg', form.current, 'JaH9Kx28Q7vIRroEv').then(
    //   (result) => {
    //     toast.success('Your message has been sent.', {
    //       position: 'top-center',
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'dark',
    //     });
    //   },
    //   (error) => {
    //     toast.success('Your message cannot send this time.', {
    //       position: 'top-center',
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'dark',
    //     });
    //   }
    // );

    emailjs.sendForm('service_tf11y1l', 'template_cexcgqg', form.current, 'JaH9Kx28Q7vIRroEv');

    toast.success('Your message has been sent.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

    e.target.reset();
  };

  return (
    <div className={styles.contact}>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" id="name" placeholder="Your Name" required />

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="e.g. youremail@gmail.com"
        />

        <textarea
          required
          name="message"
          id="message"
          className={styles.message}
          rows={10}
          placeholder="Your message here"
        ></textarea>

        <Button label="Send Email" />
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
