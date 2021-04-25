import React, { useState } from "react";

import Data from "./description.json";

import Photo1 from '../Components/Photos/photo_1_1_2021_8_00.jpeg';
import Photo2 from '../Components/Photos/photo_1_1_2021_10_00.jpg';
import Photo3 from '../Components/Photos/photo_1_1_2021_12_00.jpeg';
import Photo4 from '../Components/Photos/photo_1_1_2021_14_00.jpg';

import Photo5 from '../Components/Photos/photo_2_1_2021_8_00.jpg';
import Photo6 from '../Components/Photos/photo_2_1_2021_10_00.jpeg';
import Photo7 from '../Components/Photos/photo_2_1_2021_12_00.jpg';
import Photo8 from '../Components/Photos/photo_2_1_2021_14_00.jpg';

import Photo9 from '../Components/Photos/photo_3_1_2021_8_00.jpg';
import Photo10 from '../Components/Photos/photo_3_1_2021_10_00.jpg';
import Photo11 from '../Components/Photos/photo_3_1_2021_12_00.jpeg';
import Photo12 from '../Components/Photos/photo_3_1_2021_14_00.jpg';



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
        ErrorSet("type vaild Date(and fill all inputs)");
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
        ErrorSet("type vaild Date(and fill all inputs)");
    }
  };


  

return(
    <form>

<div className="Inputs">

<select placeholder="Date here" onChange={handleChangeDate} >
    <option className="NoDisplay">Select Date....</option>
    <option value="01.01.2021">01.01.2021</option>
    <option value="02.01.2021">02.01.2021</option>
    <option value="03.01.2021">03.01.2021</option>
  
  </select>
<select placeholder="Time here" onChange={handleChangeTime} >
<option className="NoDisplay">Select Time....</option>
    <option value="8:00">8:00</option>
    <option value="10:00">10:00</option>
    <option value="12:00">12:00</option>
    <option value="14:00">14:00</option>
  
  </select>
</div>
<div className="PossibleOptions">
    <p>Photos were made in 01.01.2021, 02.01.2021 and 03.01.2021 only at 8:00, 10:00, 12:00, 14:00.</p><br/>
    <p>In each of those days we focus on different types of insects. Try it yourself!</p>
</div>
<div className="message">
    
    {error && <div className="error">{error}</div>}
    { date && time && <div className="SearchResult"><p>Serach results for: {date}  {time}.</p></div>}
    <div className="DisplayPhoto">
    { date ===null && time===null &&<div className="Test"><p>Please choose proper data</p></div>}
    { date ===null || time===null &&<div className="Test"><p>Please choose proper data</p></div>}
    {
	Data.photos.map((photos, i) => {
		return (
			<div key={i}>
				<div>	{photos.photo1.map(function (role, i) { 
							return <div key={i}>
                            { date ==='01.01.2021' && time==='8:00' &&
                            <div className="Container"><img className="image" src={Photo1} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>

                <div>	{photos.photo2.map(function (role, i) { 
							return <div key={i}>
                            { date ==='01.01.2021' && time==='10:00' &&
                            <div className="Container"><img className="image" src={Photo2} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo3.map(function (role, i) { 
							return <div key={i}>
                            { date ==='01.01.2021' && time==='12:00' &&
                            <div className="Container"><img className="image" src={Photo3} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo4.map(function (role, i) { 
							return <div key={i}>
                            { date ==='01.01.2021' && time==='14:00' &&
                            <div className="Container"><img className="image" src={Photo4} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo5.map(function (role, i) { 
							return <div key={i}>
                            { date ==='02.01.2021' && time==='8:00' &&
                            <div className="Container"><img className="image" src={Photo5} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo6.map(function (role, i) { 
							return <div key={i}>
                            { date ==='02.01.2021' && time==='10:00' &&
                            <div className="Container"><img className="image" src={Photo6} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo7.map(function (role, i) { 
							return <div key={i}>
                            { date ==='02.01.2021' && time==='12:00' &&
                            <div className="Container"><img className="image" src={Photo7} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo8.map(function (role, i) { 
							return <div key={i}>
                            { date ==='02.01.2021' && time==='14:00' &&
                            <div className="Container"><img className="image" src={Photo8} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo9.map(function (role, i) { 
							return <div key={i}>
                            { date ==='03.01.2021' && time==='8:00' &&
                            <div className="Container"><img className="image" src={Photo9} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo10.map(function (role, i) { 
							return <div key={i}>
                            { date ==='03.01.2021' && time==='10:00' &&
                            <div className="Container"><img className="image" src={Photo10} alt="aa"/>
                           <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo11.map(function (role, i) { 
							return <div key={i}>
                            { date ==='03.01.2021' && time==='12:00' &&
                            <div className="Container"><img className="image" src={Photo11} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo12.map(function (role, i) { 
							return <div key={i}>
                            { date ==='03.01.2021' && time==='14:00' &&
                            <div className="Container"><img className="image" src={Photo12} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p></div>
                            </div> 
                         }
                            </div>
				})}</div>
			</div>
				);
	})
	}



    </div>
    
</div>




        </form>
        
);


}

export default SearchBars;
