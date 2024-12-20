import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700'>
        Please contact me directly at <a className='underline' href='mailto:example@gmail.com'>example@gmail.com</a>or through this form.
      </p>

      <form className='mt-10 flex flex-col'>
        <input className='h-14 rounded-lg borderBlack' type="email" name="" id="" />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4'/>
        <button className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105' type='submit'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/></button>
      </form>
    </section>
  )
}

export default Contact
