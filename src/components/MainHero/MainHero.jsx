import React, { useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import myImage from './../../assets/me.jpg'
import './MainHero.css'
import resume from './../../assets/myresume.pdf'

const MainHero = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Enthusiastic Web Developer', 'Mern Stack Developer'],
        loop: {},
    });

    return (
        <div className="waste">
            <div className="left-hero">
                <div className="intro">
                    <p> I'm Mithulesh Chowdary</p>
                </div>
                <div className="typewriter" style={{ paddingBottom: "10px" }}>
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {text.length == 0 ? <br /> : text}
                    </span>
                    <p>   </p><p></p>
                </div>

            </div>

            <div className="right-hero">
                <img src={myImage} alt="" style={{ width: "250px", height: "250px", borderRadius: 300 / 2, marginRight: "20px" }} />
            </div>
        </div>
    )
}

export default MainHero
