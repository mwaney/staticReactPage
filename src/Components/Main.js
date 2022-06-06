import React from "react"
import {MdEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"

export default function Main(){
    return (
        <div>
            <h1>Laura Smith </h1>
            <p>Frontend Developer</p>
            <p>laurasmith.website</p>
            <button><MdEmail />Email</button>
            <button><FaLinkedin />LinkedIn</button>
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}