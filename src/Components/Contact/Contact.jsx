import React from 'react'
import style from "../Contact/Contact.module.css"
export default function Contact() {
  return (
    
    <>
    <div className={style.test}>
    <div className='w-50 text-center mx-auto'>
    <h1 className={` fw-bold ${style.titel}`}>CONTACT ME</h1>
    <div className="position-relative w-50 mx-auto">
    <i className={`${style.icon} fa-solid fa-star d-flex justify-content-center`}></i>
    <span className={`${style.before}`} ></span>
    <span className={`${style.after}`} ></span>
    </div>
    </div>
    <div className="container w-50 mx-auto">
      <div className={`${style.line} w-100 mb-5 pb-3`}> 
      <input className={`${style.border} w-100 fs-3 `}  type="text" placeholder='Name'  id=""/>
      </div>
      <div className={`${style.line} w-100 mb-5 pb-3`}> 
      <input className={`${style.border} w-100 fs-3`}  type="text" placeholder='Email Adress'  id=""/>
      </div>
      <div className={`${style.line} w-100 mb-5 pb-3`}> 
      <input className={`${style.border} w-100 fs-3`}  type="text" placeholder='Phone Number'  id=""/>
      </div>
      <div className={`${style.line} w-100 mb-5 pb-5`}> 
      <input className={`${style.border} w-100 fs-3`}  type="text" placeholder='Message'  id=""/>
      </div>
   
    </div>
  
    </div>
   </>
  )
  }
