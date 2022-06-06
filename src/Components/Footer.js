import React from "react"
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"

export default function Footer(){
    return(
        <div className="footer">
            <div className="iconsDiv">
                <div className="socialMedia" id="twitter"><FaTwitter /></div>
                <div className="socialMedia" id="facebook"><FaFacebook /></div>
                <div className="socialMedia" id="instagram"><FaInstagram /></div>
                <div className="socialMedia" id="github"><FaGithubSquare /></div>
            </div>
        </div>
    )
}
