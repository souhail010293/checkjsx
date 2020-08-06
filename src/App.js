import React from 'react';
import './style.css';
import picture from './imageInSrc.jpg';
import video from './myVideo.mp4';
function App() {
  return (
    <div className="App">
      <div style={{
            border:'solid 1px black' ,
            maxWidth : "100vw"}}>  

              <h1 className ="title Red">Your name here</h1>  

              <img src="imageInPublic.jpg" />

              <img src = {picture} />


          </div>  

          <video width="320" height = "240" controls>

              <source src={video} type ='video/mp4'></source>

          </video>

    </div>
  );
}

export default App;