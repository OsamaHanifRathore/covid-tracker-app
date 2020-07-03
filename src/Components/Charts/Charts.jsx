import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Charts = ({ dailyData,country,covidData:{confirmed,deaths,recovered} }) => {
    console.log('data', dailyData);
    console.log('country',country);
    console.log('covidData',confirmed,deaths,recovered);

    const BarChart =(
        confirmed ?(
        <Bar 
        data ={{
            
            labels:['Infected','Recovered','Deaths'],
            datasets:[
                {
                    label:'people',

                    backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                    
                    data:[confirmed.value,recovered.value,deaths.value]
                }
            ]
        }}
        options= {{
            legend :{display:false},
            title:{display:true,text:`current State is ${country}`}
        }}
        />):null
    )

    const lineChart = (
        dailyData.length ? (
            <Line
            data={{
                labels: dailyData.map(({date})=>date),
                datasets: [{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true,
                }, {
                    data:dailyData.map(({deaths})=>deaths),
                    label:'deaths',
                    borderColor:'red',
                    backgroundColor:'rgb(255,0,0,0.5)',
                    fill:true,
                }],
            }}
        />): null
    );


return (
    <div className = {styles.container}>
        {country==='Global'?lineChart:BarChart}
    </div>
)
}

export default Charts;