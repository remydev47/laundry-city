import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
     <div className='flex items-center'>
       <Image 
         alt=''
         src='/images/upwork.jpg'
         width={40}
         height={40}
       />

     </div>
    </>
  )
}
