import React from 'react'
import { useCopyEmail } from "../hooks/useCopyEmail";
import { SectionBadge } from './ui/SectionBadge'
import Button from './ui/Button'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Data } from '../data/data'
import { motion } from 'framer-motion';

export const ContactUs = () => {
  const { copied, copyEmail } = useCopyEmail();


  const handleClick = (item) => {

    if (item.copy) {
      copyEmail(item.value);
      return;
    }


    if (item.href) {
      window.open(
        item.href,
        item.external ? "_blank" : "_self"
      );
    }

  };
  return (
    <>
      <section id="contact" className='relative overflow-hidden max-w-7xl mx-auto py-24 sm:px-6 sm:py-28 px-4'>
        {/* grid layout */}
        <div className='grid md:grid-cols-[2fr_3fr] grid-cols-1 gap-8 w-full pt-6'>
          {/* left: contact links flex-col */}
          <div className='flex flex-col'>
            {/* section title */}
            <div className='mb-3'>
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "linear" }}>
                <SectionBadge text="Contact" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
              </motion.div>
              <motion.h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6, ease: "linear" }}>Get In Touch</motion.h1>
            </div>
            {Data.contactLinks.map((item, index) => (
              <motion.div key={item.label} initial={{
                opacity: 0,
                x: -50
              }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 1.2 + item.id * 0.1,
                }}>
                <Link
                  onClick={() => handleClick(item)}
                  to={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-4 py-5 px-4 transition-all duration-300 relative inline-flex hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent ${index !== Data.contactLinks.length - 1
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

                  {item.copy && copied && (
                    <span
                      className=" absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-xs px-2 py-1 rounded"
                    >
                      Email Copied!
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* right: primary bg contact detail card */}

          <motion.div className='rounded-2xl p-8 bg-primary border border-dark/15 dark:border-light/15 text-dark dark:text-light' initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "linear" }} data-primary-bg>
            <h1 className='font-semibold text-2xl sm:text-2xl mb-2 text-white tracking-wide'>Send Message</h1>
            <form className='flex flex-col gap-6'>
              {/* Name */}
              <input
                type='text'
                placeholder='Your Name'
                className='bg-transparent border-b border-white/30 text-white placeholder:font-light placeholder:text-white/65 py-3 px-1 outline-none focus:border-white transition-colors duration-300 text-sm sm:text-base'
                required
              />
              {/* Email */}
              <input
                type='email'
                placeholder='Your Email'
                className='bg-transparent border-b border-white/30 text-white placeholder:font-light placeholder:text-white/65 py-3 px-1 outline-none focus:border-white transition-colors duration-300 text-sm sm:text-base'
                 required
              />
              {/* Message */}
              <textarea
                rows={4}
                placeholder='Your Message'
                className='bg-transparent border-b border-white/30 text-white placeholder:font-light placeholder:text-white/65 py-3 px-1 outline-none focus:border-white transition-colors duration-300 resize-none text-sm sm:text-base'
                 required
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
          </motion.div>

        </div>
      </section>
    </>
  )
}
