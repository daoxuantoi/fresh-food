import React from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {RiRefreshFill} from 'react-icons/ri'
import {BiMinus} from 'react-icons/bi'
import {BiPlus} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import EmptyCart from './img/emptyCart.svg'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const CardContainer = () => {
  const [{cartShow,cartItems,user}, dispatch] = useStateValue()

  const closeCartShow = ()=>{
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: false
    })
  }

  const clearHandle = ()=>{
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: []
    
    })

    localStorage.removeItem("cartItems")
  }

  return (
    <motion.div 

    initial={{opacity: 0, x: 200}}
    animate={{opacity: 1, x:0}}
    exit= {{opacity: 0, x:200}}
    className="w-full md:w-375 fixed top-0 right-0 h-screen bg-white drop-shadow-md flex flex-col
    z-[51]
    ">

        <div className="w-full flex items-center justify-between p-4 cursor-pointer">
            <motion.div
            onClick = {closeCartShow}
            whileTap={{scale:0.75}}
            className="">
                <MdOutlineKeyboardBackspace className="text-textColor text-2xl"/>
            </motion.div>
            <p className="flex p-2 font-semibold text-2xl text-textColor">Cart</p>

            <motion.p 
            onClick={clearHandle}
            whileTap = {{scale: 0.75}}
            className="flex font-semibold text-textColor items-center">Clear<RiRefreshFill className="ml-1"/></motion.p>
        </div>


        {/* bottom section */}
         <div className="w-full h-full flex flex-col justify-between bg-cartBg rounded-t-[2rem]">
           {cartItems && cartItems.length > 0 &&  ( <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                  
                  {cartItems.map(cartItem => {

                      return (<CartItem cartItem={cartItem}/>)
                      
                  })
                  
                  
                  }
                 

                
            </div>
)}
            {/* cart total section */}


            {cartItems && cartItems.length > 0 ? (
              <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">

              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Sub Total</p>
                <p className="text-gray-400 text-lg">$ {cartItems.reduce((accomdation,currentItem)=>{
                    return accomdation + (currentItem.qty * currentItem.price)
                },0)}</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="text-gray-400 text-lg">Delivery</div>
                <div className="text-gray-400 text-lg">$2.5</div>
              </div>
  
              <div className="w-full border-b border-gray-600 my-2">
  
              </div>
              <div className="w-full flex items center justify-between">
                <p className="text-gray-200 text-xl font-semibold">Total</p>
                <p className="text-gray-200 text-xl font-semibold">$11.5</p>
              </div>
             {user ? ( <button className="w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out">
            Check Out
            </button>
            ):( <button className="w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out">
            Login To Check Out
            </button>
            )}
              </div>
              

            ):
              <div className="w-full h-full p-1 px-2 rounded-lg bg-white flex flex-col justify-center items-center gap-2">
                
                <img src={EmptyCart} className="w-full auto" alt="nonecartitem" />
                <p className="text-textColor font-semibold">Add some item to your cart</p>
              </div>}
            

            
            
         </div>
          </motion.div>
  )
}

export default CardContainer
