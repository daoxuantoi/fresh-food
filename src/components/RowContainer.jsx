import React, { useEffect, useRef, useState } from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import {motion} from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import NotFound from './img/NotFound.svg'
import { actionType } from '../context/reducer'
import Product from './Product'

const RowContainer = ({flag,data=[],scrollValue}) => {
    const [{cartItems},dispatch] = useStateValue()

    const rowContainer = useRef()
    const [cartItemsReset, setCartItemsReset] = useState(cartItems)
    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue
    },[scrollValue])
    // console.log(data.length)

    if(data==null){ data = []}

    const addToCart = (item) => {
        // setCartItemsReset([...cartItems,item])
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: cartItemsReset
        })
        localStorage.setItem("cartItems", JSON.stringify(cartItemsReset))
    }

    useEffect(()=>{
        addToCart()
    },[cartItemsReset])



    const mergeFunction = (itemRecive) =>{
        cartItems.map(itemValue =>{
            if(itemValue.id = itemRecive.id){
                itemValue.qty += 1 

                setCartItemsReset([...cartItems])
                setCartItemsReset([...cartItems,itemRecive])
            }
            else{
                setCartItemsReset([...cartItems,itemRecive])
                
            }
        })
        
    }

  return (
    <div 
    ref={rowContainer}
    className={`w-full flex gap-4 bg-rowBg my-12 ${flag ? "overflow-x-scroll scroll-smooth scrollbar-none": "justify-center flex-wrap overflow-x-hidden"}`}>

        {data && data.length > 0 ? data.map(item=>{

            console.log(item)
            
            return <Product item={item}/>
        }) : <div class="flex flex-col justify-center items-center">
            <img src={NotFound} className="w-full" alt="notfoundimg" />
            <p className="mt-4 font-semibold text-base text-textColor">Item Not Found!</p>
            </div>}

        
    </div>
  )
}

export default RowContainer
