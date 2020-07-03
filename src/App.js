import React, { useEffect, useState } from 'react'
import Cards from './Components/Cards/Cards.jsx'
import Charts from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker.jsx'
import styles from './App.module.css'
import axios from 'axios';

const App = () => {
    
    const url = "https://covid19.mathdro.id/api"
    const [covidData, setCovidData] = useState({});
    const [covidChartData, setCovidChartData] = useState([]);
    const [chartCountry,setCountry] = useState(null);
    

    async function fetchdata(country='Global') {
        let changeableurl = url;
        setCountry(country);
        if(country  && country !== 'Global'){
            
            changeableurl = `${url}/countries/${country}`
            
            
    
        }
        try {
            const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableurl)


            const modifyData = {
                confirmed,
                recovered,
                deaths,
                lastUpdate,
            }

            console.log('global,county',modifyData);
            setCovidData(modifyData);


        } catch (error) {
            setCovidData(error)
        }
    }
    useEffect(() => {

      
            async function covidDailyData() {
                try {
                    const { data} = await axios.get(`${url}/daily`)
                        
                    const modifiedData = data.map((dailyData)=>({
                        confirmed:dailyData.confirmed.total,
                        deaths:dailyData.deaths.total,
                        date:dailyData.reportDate,

                    }))


                        setCovidChartData(modifiedData);


                } catch (error) {
                    setCovidChartData(error)
                }

            }
            
            
            fetchdata();
            covidDailyData();
        }
        
  , [setCovidChartData]);
  
  console.log('country in fetch data',chartCountry);

  const handleChangeCountry = async(country) =>{
    console.log(country)
    
    fetchdata(country);  
 }
    return (

        <div className={styles.container}>

            <Cards data={covidData} />
            <CountryPicker handleChangeCountry={handleChangeCountry}/>
            <Charts dailyData={covidChartData} country = {chartCountry} covidData={covidData}/>
        </div>
    )
}
export default App;