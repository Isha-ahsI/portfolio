import React from 'react'
import { SectionBadge } from './ui/SectionBadge'
import Button from './ui/Button'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Data } from '../data/data'

export const ContactUs = () => {
  return (
    <>
      <section className='relative overflow-hidden max-w-7xl mx-auto py-24 sm:px-6 sm:py-28 px-4'>
        {/* grid layout */}
        <div className='grid md:grid-cols-[2fr_3fr] grid-cols-1 gap-8 w-full pt-6'>
          {/* left: contact links flex-col */}
          <div className='flex flex-col'>
            {/* section title */}
            <div className='mb-3'>
              <SectionBadge text="Contact" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
              <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary'>Get In Touch</h1>
            </div>
            {Data.contactLinks.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`group flex items-center gap-4 py-5 px-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent ${index !== Data.contactLinks.length - 1
                  ? 'border-b border-dark/10 dark:border-white/10'
                  : ''
                  }`}
              >
                {/* icon */}
                <div className='h-11 w-11 shrink-0 rounded-xl grid place-items-center border dark:border-light/15 dark:bg-light/5 border-dark/15 bg-dark/5 text-dark/75 dark:text-light/75 transition-all duration-300 ease-linear group-hover:border-primary group-hover:text-white group-hover:bg-primary group-hover:shadow-[0_0_25px_rgba(var(--color-primary-rgb),.3)]'>
                  <item.icon size={20} />
                </div>

                {/* label & value */}
                <div className='flex flex-col'>
                  <span className='text-xs uppercase tracking-wider font-semibold text-dark/50 dark:text-light/50'>
                    {item.label}
                  </span>
                  <span className='relative text-sm sm:text-base font-medium text-dark dark:text-light group-hover:text-primary transition-all duration-300 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-primary after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300'>
                    {item.value}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* right: primary bg contact detail card */}

          <div className='rounded-2xl p-8 bg-primary border border-dark/15 dark:border-light/15 text-dark dark:text-light' data-primary-bg>
            <h1 className='font-semibold text-2xl sm:text-2xl mb-2 text-white tracking-wide'>Send Message</h1>
            <form className='flex flex-col gap-6'>
              {/* Name */}
              <input
                type='text'
                placeholder='Your Name'
                className='bg-transparent border-b border-white/30 text-white placeholder:font-light placeholder:text-white/65 py-3 px-1 outline-none focus:border-white transition-colors duration-300 text-sm sm:text-base'
              />
              {/* Email */}
              <input
                type='email'
                placeholder='Your Email'
                className='bg-transparent border-b border-white/30 text-white placeholder:font-light placeholder:text-white/65 py-3 px-1 outline-none focus:border-white transition-colors duration-300 text-sm sm:text-base'
              />
              {/* Message */}
              <textarea
                rows={4}
                placeholder='Your Message'
                className='bg-transparent border-b border-white/30 text-white placeholder:font-light placeholder:text-white/65 py-3 px-1 outline-none focus:border-white transition-colors duration-300 resize-none text-sm sm:text-base'
              />
              {/* Send button */}
              <Button
                type='submit'
                variant='light'
                icon={<FiArrowUpRight className='text-lg ms-2 transition-transform duration-300 group-hover:rotate-45' />}
                iconPosition='right'
                className='mt-2 w-full'
              >
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}
