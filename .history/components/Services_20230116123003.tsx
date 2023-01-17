import React from 'react';

const services=[
    {
        image:'/images/service1.png',
        title:'Wash & Fold',
        description:"The curtains come in different materials such as pure cotton lining, linen &amp; cotton blend drapes in superior color, fabric, and texture.",
    },
    {
        image:'/images/service2.png',
        title:'Commercial Laundry Service',
        description:"We know it is your most cherished gown. &nbsp;Give us a call and we will pick your gown and work our magic on it and restore it to its original texture.",
    },
    {
        image:'/images/service3.png',
        title:'Eco-Friendly Laundry',
        description:"Often food, beverage stains and others like pen ink marks could mar your suede, leather and silk handbags or jackets. Give us a call, we will fix it.",
    },
    {
        image:'/images/service4.png',
        title:'Self service & Laundromat',
        description:"Oil stains are stubborn and may not be entirely possible to remove by water. &nbsp;Synthetic fibers like polyester respond well to only dry cleaning..",
    },
    
  ]

const Services = () => {
  return (
    <section className="bg-gray-200 sm:py-8 lg:py-20">
     
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
     <div className="max-w-2xl mx-auto text-center">
      <h2 className=" font-bold font-serif text-4xl leading-tight text-black">Our Successful Professional Work</h2>
    
     </div>

     <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
      {services.map((item, i) => (
     <div className="overflow-hidden bg-white border-gray-300">             
          <div className="flex flex-col items-center justify-center">
           
              <img
               src={item.image} 
               className="w-full"
             />
             
             <h2 className='font-semibold  text-2xl text-black text-center mt-2'>
               {item.title}
             </h2>
             <p className='text-base font-serif text-noraml text-center '>
              {item.description}
             </p>
          </div>                     
     </div>
     ))}
    </div>
   </div>
  </section>
  )
}

export default Services