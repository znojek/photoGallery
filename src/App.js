
import Title from './Components/Title';
import SearchBars from './Components/SearchBars'
import "./Styles/Title.css";
import "./Styles/Inputs.css";
import "./Styles/Frame.css";
import "./Styles/DisplayPhoto.css";
import MainFrame from './Components/MainFrame';
import ShowChart from './Components/Chart/Chart';



function App() {
  return (
    <div >
      <Title />
      <MainFrame/>
      <SearchBars />
      <ShowChart />
    
    </div>
  );
}

export default App;
