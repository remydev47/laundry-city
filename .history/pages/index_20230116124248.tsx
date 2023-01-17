import Head from 'next/head'
import Image from 'next/image'
import { Hero, Reasons, Services } from '../components'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Reasons />
    </>
  )
}
