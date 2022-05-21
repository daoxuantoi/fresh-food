import React, { useState } from 'react'
import {IoFastFood} from 'react-icons/io5'
import { categories } from '../utils/data';
import {motion} from 'framer-motion'
import { useStateValue } from '../context/StateProvider';
import RowContainer from './RowContainer';

const MenuContainer = () => {

    const [filter,setFilter] = useState("chicken");
    const [{foodItems}, dispatch] = useStateValue();
    return (
        <section class="w-full my-6" id="menu">
        <div className="w-full flex flex-col items-center justify-center">

        <p className="text-2xl font-semibold text-headingColor uppercase relative
            before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 
            before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 
            mr-auto
            ">
                Our Hot Dishes
            </p>
            <div className="w-full flex items-center justify-start py-6
            lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none">
               {categories && categories.map((item,index)=>{
                   return ( <motion.div 
                    whileTap={{scale:0.75}}
                    key={index} className={`group ${filter === item.urlParamName ? 'bg-red-500' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all
                   hover:bg-red-500 ease-in-out`}
                   onClick={()=>setFilter(item.urlParamName)}
                   >
                       <div className={`w-10 h-10 
                        ${filter === item.urlParamName ? 'bg-card' : 'bg-red-500'}
                       rounded-full bg-red-500 group-hover:bg-card flex items-center justify-center`}>
                           <IoFastFood className={`
                             ${filter === item.urlParamName ? 'text-textColor' : 'text-card'}
                           group-hover:text-textColor text-lg`}/>
                       </div>
                       <p className={`text-sm 
                       ${filter === item.urlParamName ? 'text-white' : ''}
                       text-textColor group-hover:text-white`}>{item.name}</p>
                   </motion.div>)
               })}
            </div>
            <div className="w-full">
                {console.log(filter)};
                <RowContainer flag={false} data={foodItems ?.filter(item=> item.category.toLowerCase() == filter.toLowerCase())}/>
            </div>
        </div>
        </section>
    )
}

export default MenuContainer
