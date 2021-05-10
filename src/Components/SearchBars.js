import React, { useState, Component } from "react";
import Data from "./description.json";
import {Bar} from 'react-chartjs-2';
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
   
    let dane1 = Data.photos.map(function(e) {
      return e.photo1.map(function(e){
          return e.temperature;
      }) 
     });
     let dane2 = Data.photos.map(function(e) {
      return e.photo2.map(function(e){
          return e.temperature;
      }) 
     });
     let dane3 = Data.photos.map(function(e) {
      return e.photo3.map(function(e){
          return e.temperature;
      }) 
     });
     let dane4 = Data.photos.map(function(e) {
      return e.photo4.map(function(e){
          return e.temperature;
      }) 
     });
     let dane5 = Data.photos.map(function(e) {
      return e.photo5.map(function(e){
          return e.temperature;
      }) 
     });
     let dane6 = Data.photos.map(function(e) {
      return e.photo6.map(function(e){
          return e.temperature;
      }) 
     });
     let dane7 = Data.photos.map(function(e) {
      return e.photo7.map(function(e){
          return e.temperature;
      }) 
     });
     let dane8 = Data.photos.map(function(e) {
      return e.photo8.map(function(e){
          return e.temperature;
      }) 
     });
     let dane9 = Data.photos.map(function(e) {
      return e.photo9.map(function(e){
          return e.temperature;
      }) 
     });
     let dane10 = Data.photos.map(function(e) {
      return e.photo10.map(function(e){
          return e.temperature;
      }) 
     });
     let dane11 = Data.photos.map(function(e) {
      return e.photo11.map(function(e){
          return e.temperature;
      }) 
     });
     let dane12 = Data.photos.map(function(e) {
      return e.photo12.map(function(e){
          return e.temperature;
      }) 
     });
  const data1 = {
      labels: ['8:00', '10:00', '12:00','14:00'],
      datasets: [
        {
          label: 'temperature in 1.01.2021',
          data: [dane1,dane2,dane3,dane4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
  },],};
  const data2 = {
    labels: ['8:00', '10:00', '12:00','14:00'],
    datasets: [
      {
        label: 'temperature in 2.01.2021',
        data: [dane5,dane6,dane7,dane8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
},],};
const data3 = {
  labels: ['8:00', '10:00', '12:00','14:00'],
  datasets: [
    {
      label: 'temperature in 3.01.2021',
      data: [dane9,dane10,dane11,dane12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
},],};
  const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
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
{ date && time &&
<div className="InputsAfter fadeout-container">
<select className='DateAfter ' placeholder="Date here" onChange={handleChangeDate} >
<option className="NoDisplay">Select Date....</option>
    <option value="01.01.2021">01.01.2021</option>
    <option value="02.01.2021">02.01.2021</option>
    <option value="03.01.2021">03.01.2021</option>
  </select>
<select className='TimeAfter' placeholder="Time here" onChange={handleChangeTime} >
<option className="NoDisplay">Select Time....</option>
    <option value="8:00">8:00</option>
    <option value="10:00">10:00</option>
    <option value="12:00">12:00</option>
    <option value="14:00">14:00</option>
  </select>
</div>
}
<div className="message"> 
    {error && <div className="error">{error}</div>}
    { date && time && <div className="SearchResult"><p>Serach results for: {date}  {time}.</p></div>}
    <div className="DisplayPhoto">
    { date ===null && time===null &&<div className="ProperData"><br/><p>Please choose proper data</p>
    <div className="Inputs ">
<select placeholder="Date here" onChange={handleChangeDate} >
    <option className="NoDisplay">Select Date....</option>
    <option value="01.01.2021">01.01.2021</option>
    <option value="02.01.2021">02.01.2021</option>
    <option value="03.01.2021">03.01.2021</option>
  </select>
  </div>
    </div>} 
    { date && time===null &&<div className="ProperData"><br/><p>Please choose proper data</p>
    <div className="Inputs fadein-container">
<select placeholder="Time here" onChange={handleChangeTime} >
<option className="NoDisplay">Select Time....</option>
    <option value="8:00">8:00</option>
    <option value="10:00">10:00</option>
    <option value="12:00">12:00</option>
    <option value="14:00">14:00</option>
  </select>
</div>
    </div>} 
    {
	Data.photos.map((photos, i) => {
		return (
			<div className='MainDisplay' key={i}>


				<div>	{photos.photo1.map(function (role, i) { 
							return <div key={i}>
                            { date ==='01.01.2021' && time==='8:00' &&
                            <div className="Container"><img className="image" src={Photo1} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data1} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>

                <div>	{photos.photo2.map(function (role, i) { 
							return <div key={i}>
                            { date ==='01.01.2021' && time==='10:00' &&
                            <div className="Container"><img className="image" src={Photo2} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data1} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo3.map(function (role, i) { 
							return <div key={i}>
                            { date ==='01.01.2021' && time==='12:00' &&
                            <div className="Container"><img className="image" src={Photo3} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data1} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo4.map(function (role, i) { 
							return <div key={i}>
                            { date ==='01.01.2021' && time==='14:00' &&
                            <div className="Container"><img className="image" src={Photo4} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data1} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo5.map(function (role, i) { 
							return <div key={i}>
                            { date ==='02.01.2021' && time==='8:00' &&
                            <div className="Container"><img className="image" src={Photo5} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data2} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo6.map(function (role, i) { 
							return <div key={i}>
                            { date ==='02.01.2021' && time==='10:00' &&
                            <div className="Container"><img className="image" src={Photo6} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data2} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo7.map(function (role, i) { 
							return <div key={i}>
                            { date ==='02.01.2021' && time==='12:00' &&
                            <div className="Container"><img className="image" src={Photo7} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data2} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo8.map(function (role, i) { 
							return <div key={i}>
                            { date ==='02.01.2021' && time==='14:00' &&
                            <div className="Container"><img className="image" src={Photo8} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data2} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo9.map(function (role, i) { 
							return <div key={i}>
                            { date ==='03.01.2021' && time==='8:00' &&
                            <div className="Container"><img className="image" src={Photo9} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data3} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo10.map(function (role, i) { 
							return <div key={i}>
                            { date ==='03.01.2021' && time==='10:00' &&
                            <div className="Container"><img className="image" src={Photo10} alt="aa"/>
                           <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                           <Bar data={data3} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo11.map(function (role, i) { 
							return <div key={i}>
                            { date ==='03.01.2021' && time==='12:00' &&
                            <div className="Container"><img className="image" src={Photo11} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data3} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
                <div>	{photos.photo12.map(function (role, i) { 
							return <div key={i}>
                            { date ==='03.01.2021' && time==='14:00' &&
                            <div className="Container"><img className="image" src={Photo12} alt="aa"/>
                            <div className="Description"><p>description:<br/>temperature:{role.temperature} °C<br/>humidity:{role.humidity}%</p>
                            <Bar data={data3} options={options}/></div>
                            </div> 
                         }
                            </div>
				})}</div>
			</div>
			);})
	}
        </div>
    </div>   
</form>   
);
}
export default SearchBars;