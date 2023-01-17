import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';

const Hero = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
    <section className='relative pt-48 pb-12 xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56'>
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src="/images/blog17.jpg" alt="" />
      </div>
     <div className='relative'>
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
      <div className="w-full lg:w-2/3 xl:w-1/2">
        <h1 className="font-serif text-xl font-bold tracking-tight text-black text-opacity-70 text-center">Proffesional Cleaning Services</h1>
        <p className="mt-6 tracking-tighter text-black">
          <span className="font-sans font-bold text-6xl">BEST Laundry </span><br />
          <span className="font-serif italic font-BOLD text-7xl">SERVICES IN TOWN</span>
        </p>
        <p className="mt-8 font-serif text-xl font-normal text-black">
         Our professional and experienced cleaning staff does the job right the first time are Carefully selected Give them a deep.
        </p>
      </div>
     </div>
     </div>
    </section>
   </motion.div>
  )
}

export default Hero