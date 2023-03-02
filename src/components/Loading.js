import React from 'react';
import {Link} from 'react-router-dom';
import "./loading.css"

const Loading = () =>{
    return(
        <div className="loding-parent">
        <div className="loding-page">
            <div className="image-section">
                <img className="team-image" src="https://im.rediff.com/cricket/2023/jan/17kohli1.jpg?w=670&h=900" alt="Loding..."/>
            </div>
            <div className="enter-section">
                <h2 className="x-heading">10X team 04</h2>
                <p className='text-font'>Hi ia balaji.one of the 10X student </p>
                <Link to="/posts"><button className="enter-button">Enter</button></Link>
                
            </div>
        </div>
        </div>
    )
}
export default Loading