import React, { useRef } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {

	const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: {
		target: any; preventDefault: () => void; 
}) => {
    e.preventDefault();

		if (!form.current) return

    emailjs
      .sendForm('service_s4i5bk1', 'template_a8bwx59', form.current, {
        publicKey: 'plgdlvKKxV5DRi8Sn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
			e.target.reset()
	}

	return (
		<S.Contacts id='contact'>
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<S.Form ref={form} onSubmit={sendEmail}>
					<S.Field required placeholder='name' name='user_name' />
					<S.Field required placeholder='email' name='email' />
					<S.Field required placeholder='subject' name='subject' />
					<S.Field required placeholder='message' as="textarea" name='message'/>
					<Button type='submit'>Send message</Button>
				</S.Form>
			</Container>
		</S.Contacts>
	);
};