import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Bee from '../Components/Photos/bee_slider.jpg';
import Butterfly from '../Components/Photos/butterfly_slider.jpg';
import Fly from '../Components/Photos/fly_slider.jpg';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const fadeImages = [
    Bee,Butterfly,Fly
  ];
const fadeProperties = {
  duration:3000,
  pauseOnHover: false
};
  export default function Slider() {
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
            
          <div className="each-fade box1">
            <img className="PhotoPos" src={fadeImages[0]} alt="xd"/>
            <div className="box_1">Insect Photos</div>
          </div>
          <div className="each-fade box1">
            <img className="PhotoPos" src={fadeImages[1]} alt="xd"/>
            <div className="box_2">Description...</div>
          </div>
          <div className="each-fade box1">
            <img className="PhotoPos" src={fadeImages[2]} alt="xd"/>
            <div className="box_3">...And more</div>
          </div>
          
        </Fade>
      </div>
    );
  }  