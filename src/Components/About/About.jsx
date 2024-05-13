import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img'/>
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam porro fugiat ex numquam quae deserunt voluptatem ea modi facere nostrum, recusandae officiis maiores. Deserunt molestiae at sit, accusamus magnam facere veritatis ipsum nulla rem cumque quam vitae ullam est perspiciatis ex doloribus pariatur tempore! Officia sequi omnis eius quidem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam porro fugiat ex numquam quae deserunt voluptatem ea modi facere nostrum, recusandae officiis maiores. Deserunt molestiae at sit, accusamus magnam facere veritatis ipsum nulla rem cumque quam vitae ullam est perspiciatis ex doloribus pariatur tempore! Officia sequi omnis eius quidem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam porro fugiat ex numquam quae deserunt voluptatem ea modi facere nostrum, recusandae officiis maiores. Deserunt molestiae at sit, accusamus magnam facere veritatis ipsum nulla rem cumque quam vitae ullam est perspiciatis ex doloribus pariatur tempore! Officia sequi omnis eius quidem!</p>
            </div>
        </div>
    )
}

export default About