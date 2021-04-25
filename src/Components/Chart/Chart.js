import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['1.01.2021 8:00', '1.01.2021 10:00', '1.01.2021 12:00', '1.01.2021 14:00',
                 '2.01.2021 8:00', '2.01.2021 10:00', '2.01.2021 12:00','2.01.2021 14:00',
                 '3.01.2021 8:00', '3.01.2021 10:00', '3.01.2021 12:00','3.01.2021 14:00'],
        datasets:[
          {
            label:'Temperature in each day:',
            data:[
              16,
              20,
              24,
              27,
              18,
              18,
              25,
              29,
              21,
              21,
              26,
              29,
              32

            ],
            backgroundColor:[
                'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ]
          }
        ]
      }
    }
  }

 

 
  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            title:{
              display:true,
              text:'Temperature in each day',
              fontSize: 20
            },
            legend:{
              display: false,
              position: 'left'
            }
          }}
        />


     
      </div>
    )
  }
}

export default Chart;