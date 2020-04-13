import React, { Component } from 'react'
import './content.css'
import logo from './asset/foto.jpg'
import foto from './asset/google.png'
import foto2 from './asset/fb.png'
import foto3 from './asset/linkedin.png'
import foto4 from './asset/twitter.png'
import foto5 from './asset/me.jpg'
class Content extends Component {
    render() {
        return (
            <div>
              
            <img  className = "img-s" src={logo} alt=""/>
            <h2 className="text" id="about">About Me</h2>
            <p className ="sentence">I am a simple, creative and innovative person who has a passion in science and technology, 
            strong analytical skills to identify critical problem.
                I am looking forward with you to join our team as a member of new technology
         </p>
        <div className="foto" id="contact">
         <a href="https://www.gmail.com/"><img className ="spasi"src={foto} alt=""/></a>
         <a href="https://www.facebook.com/"><img className ="spasi"src={foto2} alt=""/></a>
         <a href="https://www.linkedin.com/"><img className ="spasi"src={foto3} alt=""/></a>
         <a href="https://www.twitter.com/"><img className ="spasi"src={foto4} alt=""/></a>
         </div>
        
          <div className="card" id="portfolio">
           <img className ="img-c" src={foto5} alt="Avatar"/>
           <div className="container-c">
             <h4><b>Indra Kawasan S</b></h4> 
             <p>Software Engineer</p> 
           </div>
           </div>
         </div>
        
        )
    }
}

export default Content