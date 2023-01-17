import Head from 'next/head'
import Image from 'next/image'
import { Blog, Hero, Pricing, Reasons, Services, Testimonials } from '../components'
import Steps from '../components/Steps'

export default function Home() {
  return (
    <div className='bg-gray-200'>
      <Hero />
      <Services />
      <Reasons />
      <Steps />
      <Pricing />
      <Testimonials />
      <Blog />
    </div>
  )
}
