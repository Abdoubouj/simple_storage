import React from 'react'
import logo from "../assets/newLogo.png"
import { Link} from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer overflow-hidden min-h-[350px] py-5 px-3 bg-blue-50 flex items-center justify-center'>
         <div className="w-[1200px] flex flex-wrap px-5 lg:p-0 m-auto justify-center lg:justify-between gap-10 items-start">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="resources w-[300px] text-center md:text-left">
                <h1 className='text-primary text-[20px] font-[600] mb-3'>Resourses</h1>
                <div className="resources-items flex flex-col gap-1">
                   <Link to="/" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>home</Link>
                   <Link to="/HowItWork" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>how it works</Link>
                   <Link to="/Pricing" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>pricing</Link>
                   <Link to="/Faq" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>FAQ</Link>
                   <Link to="/Contact" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>contact</Link>
                </div>
            </div>
                <div className="follow-us w-[300px] text-center md:text-left">
                <h1 className='text-primary text-center text-[20px] font-[600] mb-3'>Follow Us</h1>
                    <div className="social-media-items flex flex-row md:flex-col gap-5 justify-center md:justify-start items-center w-full">
                        <a href='#' className="item text-[25px] transition duration-300 hover:text-primary">
                            <FaFacebook/>
                        </a>
                        <a href='#' className="item text-[25px] transition duration-300 hover:text-primary">
                          <FaInstagram/>
                        </a>
                        <a href='#' className="item text-[25px] transition duration-300 hover:text-primary">
                        <FaSquareXTwitter/>
                        </a>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default Footer