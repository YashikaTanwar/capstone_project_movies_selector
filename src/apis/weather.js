import { Axios } from "axios";
const DEAFULT_LOCATION="faridabad";
export const getweatherDetails=async ()=>{
    try {
        const reqUrl=`http://api.weatherapi.com/v1/current.json?key=264a3e88da964890af3172939240904&q=${DEAFULT_LOCATION}`;
        const response=await Axios.get(reqUrl);
        console.log(response.data);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}