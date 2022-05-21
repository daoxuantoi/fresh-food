import React, { useEffect, useRef, useState } from 'react'
import HomeContainer from './HomeContainer'
import {motion} from 'framer-motion'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import MenuContainer from './MenuContainer'
import CardContainer from './CardContainer'
import Footer from './Footer'


const MainContainer = () => {

  const [scrollValue, setScrollValue] = useState(0)
  const rowContainer = useRef()
  const [{foodItems,cartShow}, dispatch] = useStateValue()
  
  // useEffect(()=>{},[scrollValue])
 
  return (
    <div className="flex h-auto flex-col justify-center items-center">
     <HomeContainer />
     <section className="w-full my-6">
       <div className="w-full flex items-center justify-between">
         <p className="text-2xl font-semibold text-headingColor uppercase relative
         before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 
         before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 
         
         ">
            Our fresh & healthy food
         </p>
         <div className="items-center hidden md:flex gap-3">
            <motion.div onClick={()=>setScrollValue(-200)} whileTap={{scale:0.75}}className="w-8 h-8 rounded-lg bg-orange-300 cursor-pointer hover:bg-orange-500 hover:drop-shadow-xl
             flex items-center justify-center">
               <MdChevronLeft className="text-white text-lg"/>
            </motion.div>
            <motion.div onClick={()=>setScrollValue(200)} whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-orange-300 cursor-pointer hover:bg-orange-500 hover:drop-shadow-xl
             flex items-center justify-center">
               <MdChevronRight className="text-white text-lg"/>
            </motion.div>
         </div>
       </div>
{/* tailwind css */}
       <RowContainer flag={true} scrollValue={scrollValue} data={foodItems}/>
     </section>
     <MenuContainer/>


     {cartShow && <CardContainer />}


     <Footer />
    </div>


  )
}

export default MainContainer
