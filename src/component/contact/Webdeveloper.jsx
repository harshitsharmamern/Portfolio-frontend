import React from 'react'

const Webdeveloper = () => {
  return (
    <>
       <div className="container">
         <div>
            Github Link: <a href="https://github.com/harshitsharmamern">https://github.com/harshitsharmamern</a>
            <br /> resume : <a href="https://drive.google.com/file/d/1W2jYkV3ES62tKBnNcRI3E7A8ghR_2m6u/view?usp=sharing" target='_blank'> resume</a>
         </div>

          <div className="card">
            <div className="project-title">
               <h1> Yuva portal</h1>
            </div>
                <div className="project-link">
                  <iframe src="https://yuvaportal.youngindians.net/" frameborder="0"></iframe>
                </div>
          </div>

          {/* //////////////// */}
          <div className="card">
            <div className="project-title">
               <h1> social Media</h1>
            </div>
                <div className="project-link">
                  <iframe src="https://my-yuva-frontend.vercel.app/" frameborder="0"></iframe>
                </div>
          </div>
       </div>
    </>
  )
}

export default Webdeveloper