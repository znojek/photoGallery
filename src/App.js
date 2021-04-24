
import Title from './Components/Title';
import SearchBars from './Components/SearchBars'
import "./Styles/Title.css";
import "./Styles/Inputs.css";
import "./Styles/Frame.css";
import "./Styles/DisplayPhoto.css";
import MainFrame from './Components/MainFrame';



function App() {
  return (
    <div >
      <Title />
      <MainFrame/>
      <SearchBars />
    
    </div>
  );
}

export default App;
