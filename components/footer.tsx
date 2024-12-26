import React from 'react'

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; 2030 Thiago. All rights reserverd.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind css, Framer Motion, React Email e Resend, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer
