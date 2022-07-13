import React from 'react'
import style from "../footer/Footer.module.css"
export default function Footer() {
  return (
  <>
    <div className={style.Footer}>
<div className="container">

<div className="row text-white">
  <div className="col-md-4 text-center fs-5">
<h4>LOCATION</h4>
<p>2215 John Daniel Drive
<br />
Clark, MO 65243</p>
  </div>
  <div className="col-md-4  fs-5">
<h4 className='text-center'>AROUND THE WEB</h4>
<div className="icons d-flex justify-content-center ">
<div className={`mx-1 ${style.icon}`}>
  <i class="fa-brands fa-facebook-f "></i>
  </div>
  <div className={`mx-1 ${style.icon}`}>
<i class="fa-brands fa-twitter"></i>
</div>
<div className={`mx-1 ${style.icon}`}>
<i class="fa-brands fa-linkedin-in"></i>
</div>
<div className={`mx-1 ${style.icon}`}>
<i class="fa-solid fa-basketball"></i>
</div>
  </div>

</div>
  <div className="col-md-4 text-center fs-5 ">
<h4 >ABOUT FREELANCER</h4>
<p>Freelance is a free to use, MIT
  <br />
  licensed Bootstrap theme created by
  <br />
  Route</p>
  </div>

</div>
</div>
    </div>
    <div className={`${style.copyright} text-center py-2`}>
<p className='mt-3'>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
