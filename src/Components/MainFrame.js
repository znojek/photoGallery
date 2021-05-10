import React from "react";
import test from './Photos/test.gif';
import Photo1 from './Photos/photo_1_1_2021_8_00.jpeg';

const MainFrame = () => (
    <div >
        <div className="Frame">
        <div className="Box1">
            <p>We will create base of your photos: </p> <br/>
            <img className="FramePhoto" src={Photo1} alt="sdf"/><br/>
            <br/><p>which you can later show to world</p> 
            </div>
        <div className="Box2">
            <p>easy orientation thanks to date and time select:</p><br/>
            <img className="FramePhoto" src={Photo1} alt="sdf"/>
            <br/>
            <br/><p>always find what you are looking for</p>
            </div>
        </div>
      
    </div>
);

export default MainFrame;