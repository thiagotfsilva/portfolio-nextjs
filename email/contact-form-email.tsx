import React from 'react'
import { Body, Container, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/components'

type ContactFormEmailProps ={
  message: string;
  senderEmail: string;
}

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white borderBlack my-1p px-1o py-4 rounded-md'>
              <Heading className='leading-tight'>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr/>
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail
