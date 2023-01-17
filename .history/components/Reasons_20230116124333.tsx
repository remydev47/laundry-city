import React from 'react'

const Reasons = () => {
  return (
    <section className="pt-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">WHY CHOOSE US</h1>
                <p className="mt-5 text-base font-normal leading-7 text-gray-500">Cleanmate operates in Ottawa and provides a variety of cleaning services.Choose us because of our reputation for excellence.</p>
                <div className="relative inline-flex mt-9 group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                    <a
                        href="#"
                        title=""
                        className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        role="button"
                    >
                       LEARN MORE
                    </a>
                </div>
            </div>

            <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">⚡️ Reasons to Pickus</p>

                <div className="mt-6 space-y-6 lg:space-y-8">
                    <div className="relative overflow-hidden">
                        <div className="flex items-start lg:items-center">
                            <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="/images/suit.png" alt="" />
                            <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                <a href="#" title="">
                                  Free Pick-Up & Delivery
                                </a>
                                <br/>
                                <span className="text-gray-400 font-normal">
                                 Our cleaners are insured and bonded so no need to worry about your apartment, office or garden.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="flex items-start lg:items-center">
                            <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="/images/laundry.png" alt="" />
                            <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                <a href="#" title="">
                                  Eco-Friendly Products
                                </a>
                                <br/>
                                <span className="text-gray-400 font-normal">
                                 We use safe hospital-grade disinfectants, HEPA filtrations and microfiber cleaning cloths to reduce cross contamination.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="flex items-start lg:items-center">
                            <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="/images/truck.png" alt="" />
                            <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                <a href="#" title="">
                                Pick up & Delivery Free     
                                </a>
                                <br/>
                                <span className="text-gray-400 font-normal">
                                 Our reliable and stable crews understand your specific house and office clearning service needs.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="self-end lg:col-span-5">
                <img className="w-full mx-auto rounded-full border-gray-300" src="/images/video_cover.jpg" alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Reasons