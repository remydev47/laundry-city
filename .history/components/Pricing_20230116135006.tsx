import React from 'react'

const pricing =[
  {
    image: '/images/cloth.png',
    price: 'From $1.55 per Item',
    title: 'Dry Cleaning'
  },
  {
    image: '/images/laundry.png',
    price: 'From $1.00 per Item',
    title: 'Self Service'
  },
  {
    image: '/images/lowest-price.png',
    price: 'From $2.50 per Pound',
    title: 'Laundry Services'
  },
  {
    image: '/images/suit.png',
    price: 'From $1.99 per Suit',
    title: 'Co-operate laundry'
  },
]

const Pricing = () => {
  return (
    <>
     <section className="bg-gray-200 sm:py-8 lg:py-20 mt-6">
     
     <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
       <h2 className=" font-bold font-serif text-4xl leading-tight text-black">Affordable <br/> Pricing</h2>
       <span className='font-bold text-xl text-orange-500'>how much does it cost</span>
      </div>
 
      <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
       {pricing.map((item, i) => (
      <div className="overflow-hidden bg-white border-gray-300">             
           <div className="flex flex-col items-center justify-center">
            
               <img
                src={item.image} 
                className="w-1/4"
              />
              
              <h2 className='font-semibold  text-2xl text-black text-center mt-2'>
                {item.title}
              </h2>
              <p className='text-base font-serif text-noraml text-center '>
               {item.price}
              </p>
           </div>                     
      </div>
      ))}
     </div>
    </div>
   </section>
    </>
  )
}

export default Pricing