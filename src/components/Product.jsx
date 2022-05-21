import { motion } from 'framer-motion'
import React from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'


const Product = ({item}) => {
    const [{cartItems},dispatch] = useStateValue()

    const mergeFunction = (itemRecive) =>{
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [...cartItems, itemRecive]
        })
        
    }
  return (
    <div className="w-300 h-[260px] min-w-[300px] md:min-w-[340px] my-12 rounded-lg bg-cardOverlay hover:drop-shadow-lg 
    flex flex-col justify-between items-center
    px-2 md:w-340 backdrop-blur-lg">
    <div className="w-full flex items-center justify-between">
        <motion.img
        whileHover={{scale: 1.2}}
        className="w-40 h-40 object-fit drop-shadow-2xl"src={item.imageURL} alt="" />
        <motion.div
        onClick={
            ()=>{mergeFunction(item)}
        }
        whileTap={{scale:0.75}}
        className="w-8 h-8 flex items-center
        hover:drop-shadow-lg
        cursor-pointer justify-center rounded-full bg-red-600">
            <MdShoppingBasket className="text-white"/>
        </motion.div>
    </div>
    <div className="w-full flex flex-col gap-2 items-end justify-end">
        <p className="text-textColor font-semibold text-base md:text-lg">{item.title}</p>
        <div className="mt-1 text-sm text-gray-500">{item.calories} Calories</div>
        <div className="flex items-center gap-8">
            <p className="text-lg text-text-headingColor font-semibold">
                <span className="text-sm text-red-500">$</span> {item.price}
            </p>
        </div>
    </div>
</div>
  )
}

export default Product
