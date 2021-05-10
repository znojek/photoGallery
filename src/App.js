
import Title from './Components/Title';
import SearchBars from './Components/SearchBars'
import "./Styles/Main.css";
import "./Styles/Title.css";
import "./Styles/Inputs.css";
import "./Styles/Frame.css";
import "./Styles/DisplayPhoto.css";
import './Styles/slider.css';
import './Styles/InfoBars.css';

import MainFrame from './Components/MainFrame';
import Slider from './Components/slider';
import SecondFrame from './Components/SecondFrame';
import InfoBars from './Components/InfoBars';
import Footer from './Components/Footer';




function App() {
  return (
    <div >
      <Slider />
      <Title />
      <MainFrame/>
      <SecondFrame />
      <InfoBars />
      <SearchBars />
      <Footer />
     
     
      
     
    </div>
  );
}

export default App;
