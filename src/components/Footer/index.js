import React from 'react';
import logo from '../../imgs/SereniBOT_color.png'
import fiap from '../../imgs/FiapLogo.png'
import './footer.scss'


function Footer(){
    return(
        <>
            <div className="FooterContainer">
                <div className="FooterContent">
                    <img
                        src={logo}
                        alt="SereniBotIcon"></img>
                    <img 
                        src={fiap}
                        alt="FiapLogo"></img>
                </div>
            </div>
        </>
    )
}

export default Footer