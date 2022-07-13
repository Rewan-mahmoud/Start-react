import React from 'react'
import style from "../Home/Home.module.css"
import logo from "../../images/avataaars.svg"

export default function Home() {
  return (
    <div className={`${style.bg}  justify-content-center` }>
      <div className={`${style.width} mx-auto`} >
      <img src={logo} alt="" className={`w-100 mb-5 ${style.center}`} />
      </div>
      <div className='w-50 text-center mx-auto'>
      <h1 className={`text-white ${style.titel}`}>START REACT</h1>
      <div className="position-relative w-50 mx-auto">
      <i class={`${style.icon} fa-solid fa-star text-white d-flex justify-content-center `}></i>
      <span className={`${style.before}`} ></span>
      <span className={`${style.after}`} ></span>
      </div>
      <p className='text-white mt-5 fs-4'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
     
   
      
      
    </div>
  )
}
