import React, { useState } from 'react'
import Logo from './img/logo.png'
import {BsCart4} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {GrAdd} from 'react-icons/gr'
import Avatar from './img/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { app } from "../firebase.config"
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'


const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user,showCart,cartItems}, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const login = async () =>{
    if(!user){
      const {user: {providerData}} = await signInWithPopup(firebaseAuth, provider)
   
      console.log(providerData[0])
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      })

      localStorage.setItem('user',JSON.stringify(providerData[0]))
    }else{
      setIsMenu(!isMenu)
    }
    
  }

  const logout = () =>{
    setIsMenu(false)
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  }

  // function show cart
  const showCartFunction = () =>{
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: true
    })

  }

  return (
    <header className="fixed z-50 w-screen p-4 md:p-6 md:px-16 h-auto bg-primary">
      {/* desktop and tablet version */}
      <div className="hidden md:flex w-full h-full justify-between items-center">

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo}className="w-8 object-cover" alt="logo"/>
          <p className="text-headingColor text-xl font-bold">FreshFood</p>
        </Link>
       <div className="flex gap-8">
         <ul className="flex items-center gap-8 ml-auto">
            <li className="text-base text-textColor hover:text-headingColor
             duration-100 transition-all ease-in-oout cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor
             duration-100 transition-all ease-in-oout cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor
             duration-100 transition-all ease-in-oout cursor-pointer">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor
             duration-100 transition-all ease-in-oout cursor-pointer">Service</li>
          </ul>
          <div
          onClick = {showCartFunction}
          className="relative flex items-center justify-center">
             <BsCart4 className="w-10 text-textColor cursor-pointer"/>
            {cartItems && cartItems.length > 0 && (
            <div className="absolute w-4 h-4 rounded-full -top-1 -right-1 bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">{cartItems.reduce((accomdation,item)=>{
                return accomdation + item.qty
              },0)}</p>
            </div>
             )}
          </div>
          <div className="relative">
            <motion.img
            onClick = {login}
            whileTap={{scale: 0.6}} 
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full"
            src={user !== null ? user.photoURL : Avatar} alt="profileimage" />

           {isMenu &&  <motion.div
           initial={{opacity: 0, scale: 0.6}}
           animate={{opacity: 1, scale: 1}}
           exit={{opacity: 0,scale: 0.6}}
           className="right-0 top-12 w-40 bg-primary drop-shadow-xl rounded-lg flex absolute flex-col">
              {user && user.email === "xuantoihanu@gmail.com" && 
              <Link to="/createitem">
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
              transition-all duration-100 text-base
              " onClick={()=>setIsMenu(false)}>New Item <GrAdd /></p></Link>
              }
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
              transition-all duration-100 text-base
              " onClick = {logout}
              >Logout <FiLogOut/></p>
            </motion.div>}
          </div>
       </div>

      
      </div>
       {/* mobile version */}
       <div className="flex md:hidden w-full h-full justify-between items-center">
       
        <div onClick = {showCartFunction} className="relative flex items-center justify-center">
            <BsCart4 className="w-10 text-textColor cursor-pointer"/>
            {cartItems && cartItems.length > 0 && (
            <div className="absolute w-4 h-4 rounded-full -top-1 -right-1 bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">{cartItems.length}</p>
            </div>
             )}
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo}className="w-8 object-cover" alt="logo"/>
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="relative">
          <motion.img
          onClick = {login}
          whileTap={{scale: 0.6}} 
          className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full"
          src={user !== null ? user.photoURL : Avatar} alt="profileimage" />

          {isMenu &&  <motion.div
          initial={{opacity: 0, scale: 0.6}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0,scale: 0.6}}
          className="right-0 top-12 w-40 bg-primary drop-shadow-xl rounded-lg flex absolute flex-col">
              {user && user.email === "xuantoihanu@gmail.com" && 
              <Link to="/createitem">
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer text-textColor hover:bg-slate-200
              transition-all duration-100 text-base
              " >New Item <GrAdd /></p></Link>
              }

            <ul className="flex flex-col">
              <li className="text-base px-4 py-2  text-textColor hover:text-headingColor hover:bg-slate-200 
              duration-100 transition-all ease-in-oout cursor-pointer" onClick = {()=>setIsMenu(false)}>Menu</li>
              <li className="text-base px-4 py-2  text-textColor hover:text-headingColor hover:bg-slate-200
              duration-100 transition-all ease-in-oout cursor-pointer" onClick = {()=>setIsMenu(false)}>Home</li>
              <li className="text-base px-4 py-2  text-textColor hover:text-headingColor hover:bg-slate-200
              duration-100 transition-all ease-in-oout cursor-pointer" onClick = {()=>setIsMenu(false)}>About Us</li>
              <li className="text-base px-4 py-2  text-textColor hover:text-headingColor hover:bg-slate-200
              duration-100 transition-all ease-in-oout cursor-pointer" onClick = {()=>setIsMenu(false)}>Service</li>
            </ul>


              <p className="px-4 p-2 m-2 rounded-md py-2 flex items-center gap-3 cursor-pointer text-textColor bg-gray-200 hover:bg-gray-300
              transition-all duration-100 text-base justify-center
              "
              onClick = {logout}
              >Logout <FiLogOut/></p>
            </motion.div>}
        </div>
       </div>
    </header>
  )
}

export default Header
