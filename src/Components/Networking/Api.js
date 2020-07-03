import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchdata = async()=>{
    try{
        const {data:{confirmed,recovered,deaths,lastupdate}}= await axios.get(url)
       

        const modifyData = {
            confirmed,
            recovered,
            deaths,
            lastupdate,
        }
        return modifyData;
    }
    catch(error){
            return error;
    }
}