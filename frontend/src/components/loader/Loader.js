import React from 'react'
import ReactDom from "react-dom"
import loaderImg from "../../images/loader.gif"
import "./Loader.css"

const Loader = () => {
  return ReactDom.createPortal(
    <div className='wrapper'>
        <div className='loader'>
            <img src={loaderImg} alt='Loading...'/>
        </div>
        </div>,
        document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return(
    <div className='--center-all'>
     <img src={loaderImg} alt='Loading...'/>
    </div>
  )
}

export default Loader