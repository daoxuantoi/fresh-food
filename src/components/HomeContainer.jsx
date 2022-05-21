import React from 'react'
import Delivery from './img/delivery.png'
import HeroBg from './img/heroBg.png'
import {heroData} from '../utils/data'

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2" id="home">
      <div className="py-2 flex flex-col items-start justify-center gap-6">
        <div className="bg-orange-100 
        rounded-full px-2 py-1
        flex items-center gap-2 justify-center">
        <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} alt="" />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide">The Fastest Delivery in 
        <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span></p>
      
        <p className="text-base text-textColor text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolorum voluptatum officiis quibusdam quia sapiente aliquam saepe commodi distinctio voluptatibus.
        </p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg
          px-4 py-2 w-full md:w-auto p-4">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 items-center relative">
          <div className="flex items-center">
            <img src={HeroBg} alt="herobg img" className="ml-auto h-420 w-full lg:w-auto lg:h-650" />
          </div>

            <div className="w-full h-full right-0 absolute flex top-0 items-center justify-center gap-2 flex-wrap lg:p-32">

                {heroData.map((item)=>{
                    return <div key={item.id}
                    className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center drop-shadow-lg justify-center flex-col">
                    <img src={item.imageSrc} alt="" className="w-20 lg:w-40 -mt-10 lg:-mt-20" />
                    <p className="text-base lg:text-lg mt-2 lg:mt-4 font-semibold text-textColor">{item.name}</p>
                    <p className="text-[10px] lg:text-sm font-semibold text-lighttextGray my-3">{item.description}</p>
                    <p className="text-sm font-semibold text-headingColor"><span className="text-xs text-red-600">$</span>{item.price}</p>
                </div>
                })}
            </div>
      </div>

     
    </section>
  )
}

export default HomeContainer
