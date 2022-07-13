import React from "react";
import style from "../Portfolio/Portfolio.module.css";
import item1 from "../../images/cabin.png";
import item2 from "../../images/cake.png";
import item3 from "../../images/circus.png";
import item4 from "../../images/game.png";
import item5 from "../../images/safe.png";
import item6 from "../../images/submarine.png";


export default function Portfolio() {


  
  return (
    <>
      <div className={style.layerpop}>
        <div className={`${style.popup} `}>
          <div className="text-center mt-5 mb-4 w-50  mx-auto ">
            <div className="position-relative">
              <i
                className={` ${style.close} fa-solid fa-xmark position-absolute fs-1  `}
              ></i>
              <h1 className={`${style.center} fw-bold`}>LOG CABIN</h1>
              <i className={`fa-solid fa-star  ${style.star} `}></i>
              <span className={`${style.before} `}></span>
              <span className={`${style.after}`}></span>
            </div>
            <img src={item1} alt="" className="w-100 rounded-3 mt-5" />
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button className={`${style.button} btn text-white p-2`}>
              <span className="fw-bold">X</span> Close Window
            </button>
          </div>
        </div>
      </div>
      <div className={`${style.bg}  `}>
        <div className="text-center mb-4 w-25 mx-auto ">
          <div className="position-relative">
            <h1 id="logo" className={style.center}>
              PORTFOLIO
            </h1>
            <i className={`fa-solid fa-star ${style.star} `}></i>
            <span className={`${style.before} `}></span>
            <span className={`${style.after}`}></span>
          </div>
        </div>
        <div className="container  mb-5">
          <div className="row my-4">
            <div className="col-md-4">
              <div className="item position-relative">
                <img src={item1} className="w-100 rounded-3" alt="" />
                <div
                  className={`${style.layer} position-absolute d-flex justify-content-center align-items-center text-white `}
                >
                  <i className={`${style.icon} fa-solid fa-plus`}></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item position-relative">
                <img src={item2} className="w-100 rounded-3" alt="" />
                <div
                  className={`${style.layer} position-absolute d-flex justify-content-center align-items-center text-white `}
                >
                  <i className={`${style.icon} fa-solid fa-plus`}></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item position-relative">
                <img src={item3} className="w-100 rounded-3" alt="" />
                <div
                  className={`${style.layer} position-absolute d-flex justify-content-center align-items-center text-white `}
                >
                  <i className={`${style.icon} fa-solid fa-plus`}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="item position-relative">
                <img src={item4} className="w-100 rounded-3" alt="" />
                <div
                  className={`${style.layer} position-absolute d-flex justify-content-center align-items-center text-white `}
                >
                  <i className={`${style.icon} fa-solid fa-plus`}></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item position-relative">
                <img src={item5} className="w-100 rounded-3" alt="" />
                <div
                  className={`${style.layer} position-absolute d-flex justify-content-center align-items-center text-white `}
                >
                  <i className={`${style.icon} fa-solid fa-plus`}></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item position-relative">
                <img src={item6} className="w-100 rounded-3" alt="" />
                <div
                  className={`${style.layer} position-absolute d-flex justify-content-center align-items-center text-white `}
                >
                  <i className={`${style.icon} fa-solid fa-plus`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
