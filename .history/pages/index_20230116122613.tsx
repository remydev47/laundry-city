import Head from 'next/head'
import Image from 'next/image'
import { Hero, Services } from '../components'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}
