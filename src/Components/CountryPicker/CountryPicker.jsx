import React,{useEffect,useState} from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import axios from 'axios';


export const CountryPicker = ({handleChangeCountry}) => {
    const url = "https://covid19.mathdro.id/api"
    const [countryValues , setCountryValues] = useState([]);

   

    useEffect(() => {
        async function getCountries(){
            try{
            const {data:{countries}} = await axios.get(`${url}/countries`);
            
            const response = countries.map((country)=>country.name);
            
            setCountryValues(response);

          
            }
            catch(error){
                    console.log(error);
            }
        }
        getCountries();
    }, [setCountryValues])
    console.log(countryValues);

  

    return (
        <div>
            <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e)=>{handleChangeCountry(e.target.value)}}>
            <option value="Global"> Global</option>
            {countryValues.map((country,i)=>(<option value ={country} key={i}>{country}</option>))}
            </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;