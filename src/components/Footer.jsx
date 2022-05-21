import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import {SiZalo} from 'react-icons/si'


const Footer = () => {
  return (
    <>

<div className="flex flex-col text-center m-6 justify-evenly w-full md:flex-row">
     <div className="firstCriteria">
       <h3 className="font-bold capitalize">FRUITS</h3>
       <ul className="list-none text-base">
         <li><a href="#" className="text-sm text-textColor">Fresh fruit</a></li>
         <li><a href="#" className="text-sm text-textColor">Boxed item</a></li>
         <li><a href="#" className="text-sm text-textColor">Gifted collection</a></li>
         <li><a href="#" className="text-sm text-textColor">Fast food</a></li>
       </ul>
     </div>

     <div className="md:border-r-2 border-t-2 md:border-t-0 w-1/3 md:w-0 m-auto md:m-0 my-4"></div>
     
     <div className="firstCriteria">
       <h3 className="font-bold capitalize">About FreshFood</h3>
       <ul className="list-none text-base">
         <li><a href="#" className="text-sm text-textColor">Privacy</a></li>
         <li><a href="#" className="text-sm text-textColor">Services</a></li>
         <li><a href="#" className="text-sm text-textColor">Help</a></li>
         <li><a href="#" className="text-sm text-textColor">Emergency</a></li>
       </ul>
     </div>
     
     <div className="md:border-r-2 border-t-2 md:border-t-0 w-1/3 md:w-0 m-auto md:m-0 my-4"></div>
     <div className="firstCriteria">
       <h3 className="font-bold capitalize">Payment</h3>
       <ul className="list-none text-base">
         <li><a href="#" className="text-sm text-textColor">Delivery</a></li>
         <li><a href="#" className="text-sm text-textColor">Giao Hang Nhanh</a></li>
         <li><a href="#" className="text-sm text-textColor">Giao Hang Tiet Kiem</a></li>
         <li><a href="#" className="text-sm text-textColor">Viet Name Post</a></li>
       </ul>
     </div>
     
     <div className="md:border-r-2 border-t-2 md:border-t-0 w-1/3 md:w-0 m-auto md:m-0 my-4"></div>
     <div className="firstCriteria ">
       <h3 className="font-bold capitalize">Socials</h3>
       <ul className="list-none text-base">
         <li><a href="#" className="flex items-center justify-center gap-2"> <BsFacebook/> Facebook</a></li>
         <li><a href="#" className="flex items-center justify-center md:justify-start gap-2"><SiZalo /> Twitter</a></li>
         <li><a href="#" className="flex items-center justify-center md:justify-start gap-2"><BsInstagram />Instagram</a></li>
         <li><a href="#" className="flex items-center justify-center md:justify-start gap-2"><BsTwitter/>Zalo</a></li>
       </ul>
     </div>
     
    </div>
    <div id="copy-right" className="text-headingColor text-sm w-full mt-6 pt-4 flex items-center justify-center">
    &copy; Dao Xuan Toi
    </div>
    </>
    
  )
}

export default Footer
