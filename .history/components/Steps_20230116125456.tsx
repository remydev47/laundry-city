import React from 'react'

const Steps = () => {
  return (
    <section className="py-10  bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
            <p className="mx-auto mt-4 text-5xl font-serif font-bold leading-relaxed text-black">
              Lets Go Step by Step
            </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-yellow-300 border-2 border-gray-200 rounded-full shadow">
                        <span className="text-2xl font-bold text-gray-700">
                           <img src="/images/calendar.png" className='h-20 w-20' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-black md:mt-10">We Pick Your Clothes</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-yellow-300 border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-bold text-gray-700">
                          <img src="/images/laundry.png" className='h-20 w-20' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-black md:mt-10">Quicker Delivery</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">We ensure delivery in the quickest of the turnaround time in the industry. Superior quality of service with speed!</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-yellow-300 border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-bold text-gray-700">
                         <img src="/images/truck.png" className='h-20 w-20' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-black md:mt-10">We Deliver To Door Step</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">We have pioneered the concept of pickup and delivery in the shortest possible time. We intend keeping it that way!</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-yellow-300 border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-bold text-gray-700">
                         <img src="/images/happy.png" className='h-20 w-20' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-black md:mt-10">Relax & Enjoy Clean Laundry</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">We have pioneered the concept of pickup and delivery in the shortest possible time. We intend keeping it that way!</p>
                </div>

            </div>
        </div>
    </div>
 </section>
  )
}

export default Steps