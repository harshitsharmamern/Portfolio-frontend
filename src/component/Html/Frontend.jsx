import React from 'react'
import './frontend.css'
const Frontend = () => {
  return (
    <>
      <div className="containers">
        <div className="logo">
            <span> logo </span>
        </div>
        {/* /////// */}
        <div className="navigation">
            <span> home </span>
            <span> contact  </span>
            <span> other </span>
            <span> fb </span>
        </div>
        <div className="headers">
            <h1>this is header
                </h1>
        </div>

        <div className="main-body">
            <div className="side-bar">
                   hi there
            </div>
            <div className="right-bar">
                    this is right body
            </div>
        </div>
        <div className="footer">
            footer
        </div>
      </div>
    </>
  )
}

export default Frontend