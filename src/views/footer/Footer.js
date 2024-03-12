import React from "react";
import './components/footer.scss'
import imglogo from '../../components/imagenes/footer-logo.png'

function Footer(){
    return(
        <footer className="foot">
            <h5>2023 © All rights reserved.</h5>
            <div className="logo">
                <a href=""><img src={imglogo} alt="logo"/></a>
            </div>
        </footer>
    )
}

export default Footer;