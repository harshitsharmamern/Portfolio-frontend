import React, { useEffect, useState } from 'react'
import "./css/first.css"
import logoimage from "../photo/jsico.png"

import Navbar from './Home/Navbar'
const First = () => {
    const [activeTab, setActiveTab] = useState('skill')
    const [darkmode, setdarkmode] = useState(false)
    const openpage = (tabid) => {
        setActiveTab(tabid)
    }

    return (
        <>
            <div id='header'>
                <div className="container">
                    <div className='header-text'>
                        <p>full stack developer</p>
                        <h1>hi,i am <span>harshit</span> <br />from bhopal,india</h1>
                    </div>
                    <br /> resume : <a href="https://drive.google.com/file/d/1W2jYkV3ES62tKBnNcRI3E7A8ghR_2m6u/view?usp=sharing" target='_blank'> resume</a>

                </div>
            </div>
            {/* -------------------------about---------- */}
            <div id='about'>
                <div className='container'>
                    <div className="row">
                        <div className="about-coloumn-1">
                            <img src={logoimage} alt="" />
                        </div>
                        <div className="about-coloumn-2">
                            <h1 className='sub-title'>About me</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus corrupti cum doloribus libero dolorem deserunt vel eos laboriosam, nobis tenetur, mollitia unde. Ea, impedit ratione ad cum necessitatibus laboriosam consequatur?
                            </p>

                            <div className="tab-titles">
                                <p onClick={() => openpage('skill')} className={` tab-links ${activeTab == 'skill' ? 'active-link' : ''} `}>skills</p>
                                <p onClick={() => openpage('experience')} className={` tab-links ${activeTab == 'experience' ? 'active-link' : ''} `}>experience</p>
                                <p onClick={() => openpage('education')} className={` tab-links ${activeTab == 'education' ? 'active-link' : ''} `}>education</p>
                            </div>
                            <div className={`tab-content  ${activeTab == 'skill' ? 'active-tab' : ''}`} >
                                <ul>
                                    <li>
                                        <span>ui/ux</span> <br />
                                        designing web interface
                                    </li>
                                    <li>
                                        <span>web development</span> <br />
                                        web developed by mern stack
                                    </li>
                                    <li>
                                        <span>cpp programming</span> <br />
                                        building logics and work on dsa
                                    </li>
                                </ul>
                            </div>

                            <div className={`tab-content  ${activeTab == 'experience' ? 'active-tab' : ''}`}  >
                                <ul>
                                    <li>
                                        <span>young indians</span> <br />
                                        fullstack developer
                                    </li>
                                    <li>
                                        <span>SIH Hackathon</span> <br />
                                        make slot-booking website for vendor who are anable to get place to sell their goods
                                    </li>
                                    <li>
                                        <span>cpp programming</span> <br />
                                        building logics and work on dsa
                                    </li>
                                </ul>
                            </div>

                            <div className={`tab-content  ${activeTab == 'education' ? 'active-tab' : ''}`}  >
                                <ul>
                                    <li>
                                        <span>Lnct college</span> <br />
                                        computer science <span>8.54 cgpa</span>
                                    </li>
                                    <li>
                                        <span>12th shantiniketan</span> <br />
                                        vidisha mpboard <span>77%</span>
                                    </li>
                                    <li>
                                        <span>10th vatsalya vidisha</span> <br />
                                        74%
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* ------------------------services------- */}

            <div className="service">
                <div className="container">
                    <div className="sub-title">
                        my servives
                    </div>
                    <div className="service-list">
                        <div>
                            <i class="fa-solid fa-code"></i>
                            <h2>web developer</h2>
                            <p>I am a full stack MERN developer. Lets</p>
                            <p>check my projects</p>

                            <a class="project-link" href="/contact">Slot Booking</a>
                            <a class="project-link" href="https://yuvaportal.youngindians.net/" target="_blank">Yuva portal</a>
                            <a class="project-link" href="/contact">InstaGram Clone</a>

                            <a className="service-list-learn-more" href="/web-developer">learn more</a>
                        </div>
                            {/* ////////////cpp programmer//////////////////// */}
                        <div>
                            <i class="fa-solid fa-crop"></i>
                            <h2>cpp programmer</h2>
                            <p>I have solved about 1000dsa coding problem </p>
                            <p>profiles</p>
                            {/* ///leetcode */}

                            <a
                                href="https://leetcode.com/harshitsharma07/"
                                style={{ alignItems: "center", display: "flex", textDecoration: "none", color: "inherit" ,fontWeight:"700"}}
                                target='_blank'
                            >

                                <img
                                    className="service-cpp-link"
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                    alt=""
                                />
                                Leetcode

                            </a>


                            {/* ////////////gfg */}
                            <a
                                href="https://auth.geeksforgeeks.org/user/sharmaharshit769/practice"
                                style={{ alignItems: "center", display: "flex", textDecoration: "none", color: "inherit", fontWeight:"700"}}
                                target='_blank'

                            >
                                    <img
                                        className="service-cpp-link"
                                        src="https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg"
                                        alt=""
                                    />
                                    GFG
                            </a>

                            {/* <a className="service-list-learn-more" href="/web-developer">learn more</a> */}

                        </div>

                        <div>
                            <i class="fa-brands fa-app-store"></i>
                            <h2>Machine Learning</h2>
                            <p>Learning Machone learing and work on data set</p>
                            <p>of titanic, ipl dataset,flower</p>
                            <a href="">learn more</a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default First