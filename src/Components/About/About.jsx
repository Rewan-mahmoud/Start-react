import React from 'react'
import style from "../About/About.module.css"
export default function About() {
  return (
    <div className={style.test}>
        <div className='w-50 text-center mx-auto'>
      <h1 className={`text-white ${style.titel}`}>ABOUT</h1>
      <div className="position-relative w-50 mx-auto">
      <i class={`${style.icon} fa-solid fa-star text-white d-flex justify-content-center `}></i>
      <span className={`${style.before}`} ></span>
      <span className={`${style.after}`} ></span>
      </div>
      <p className='text-white mt-5 fs-4   '>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      <div className="container w-75 mx-auto text-white">
        <div className="row">
          <div className="col-md-5 offset-1">
            <p className='fs-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-5">
            <p className='fs-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>

      </div>
      
      </div>
  )
}
