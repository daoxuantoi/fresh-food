import React, { useEffect, useState } from 'react'
import {BiMinus} from 'react-icons/bi'
import {BiPlus} from 'react-icons/bi'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'

const CartItem = ({cartItem}) => {

    const [qty, setQty] = useState(cartItem.qty)
    const [items,setItems] = useState([])

    const [{cartItems}, dispatch] = useStateValue()

    const cartDispatch = ()=> {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        dispatch({type: actionType.SET_CARTITEMS,
            cartItems : cartItems
        }
        )
    }
    const cartDispatch2 = ()=> {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        dispatch({type: actionType.SET_CARTITEMS,
            cartItems : items
        }
        )
    }


    // useEffect(()=>{

        
    // },[])

    const addItem = () =>{
        setQty(qty+1);
        cartItems.map((item) =>{
            if(item.id === cartItem.id){
                item.qty += 1
            }
        })
        cartDispatch()
    }

    const minusItem = () => {


        if(qty === 1){
            cartItems.filter((item)=>{
               return !(item.id === cartItem.id)
            })
            setItems([...cartItems])
            cartDispatch()
        
        }
        else{
            setQty(qty-1);
            cartItems.map((item) =>{
                if(item.id === cartItem.id){
                    item.qty -= 1
                }
            })
            cartDispatch()            
        }
    }
    // useEffect(() =>{
    //     cartDispatch2
    // },[items])

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                      <img className="w-20 h-20 max-w-[60px]"src={cartItem.imageURL} alt="" />
                      <div className="flex flex-col gap-2">
                        <div className="text-base text-gray-50">{cartItem.title}</div>

                        <p className="text-sm block text-gray-300 font-semibold">$ {cartItem.price * qty}</p>

                      </div>

                      {/* botton section */}
                      <div className="group flex items-center gap-2 ml-auto 
                      cursor-pointer">
                        <div className=" flex items-center justify-center
                        ">
                          <BiMinus onClick = {minusItem} className="text-gray-50" />

                          <p className="w-5 h-25 rounded-sm bg-cardBg text-gray-50 flex items-center justify-center">{qty}</p>

                          <BiPlus onClick={addItem} className="text-gray-50" />

                        </div>
                        
                      </div>

                      </div>
  )
}

export default CartItem
