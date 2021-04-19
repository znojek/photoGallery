import React, { useState } from "react";
import Photo1 from '../Components/Photos/photo_1_1_2021_10_00.jpg';
import Photo2 from '../Components/Photos/photo_1_2_2021_12_00.jpeg';
import Photo3 from '../Components/Photos/photo_4_1_2021_8_00.jpeg';
import Photo4 from '../Components/Photos/photo_11_1_2021_11_00.jpg';

const SearchBars = () => {
    const[date, setDate] = useState(null);
    const[time, setTime] = useState(null);
    const[error, ErrorSet] = useState(null);

   


const handleChangeDate = (e) => {
    let selected =  e.target.value ;
    console.log(selected);
    if(selected ){
        setDate(selected);
        ErrorSet('');
    }
   
    else{
        setTime(null);
        ErrorSet("type vaild Date (just numbers, no letters)");
    }
  };


  const handleChangeTime = (e) => {
    let selected =  e.target.value ;
    console.log(selected);
    if(selected ){
        setTime(selected);
        ErrorSet('');
    }
    else{
        setTime(null);
        ErrorSet("type vaild Date (just numbers, no letters)");
    }
  };

  

return(
    <form>


<input type="text" onChange={handleChangeDate} />
<input type="text" onChange={handleChangeTime} />
<div className="message">
    {error && <div className="error">{error}</div>}
    { date && time && <div><p>wyniki wyszukiwania: {date} {time}.  brak zjdecia? Popraw dane</p></div>}
    { date ==='01.01.2021' && time==='10:00' && <div><img src={Photo1} alt="chuj"/></div>}
    { date ==='01.02.2021' && time==='12:00' && <div><img src={Photo2} alt="chuj"/></div>}
    { date ==='04.01.2021' && time==='8:00' && <div><img src={Photo3} alt="chuj"/></div>}
    { date ==='11.01.2021' && time==='11:00' && <div><img src={Photo4} alt="chuj"/></div>}
</div>




        </form>
        
);


}

export default SearchBars;
