import React, { useContext } from 'react';
import "./img.css";
import ThemeContext from '../context/theme';
function img() {
    const theme = useContext(ThemeContext);
    return (
        <div className="side-up">
            <div className= {`img-box ${theme}`}>
            <img src="https://rukminim2.flixcart.com/image/150/1000/jrf8o7k0/sticker/g/k/h/narendra-modi-ji-large-90-modi-ji-brown-razwada-original-imafd5bz6x5yzwsc.jpeg?q=90" alt="ttg" className='img' />
            </div>
        </div>
    )
}
export default img;