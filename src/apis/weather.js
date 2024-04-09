import { Axios } from "axios";
export const getweatherDetails=async ()=>{
    try {
        const reqUrl='http://api.weatherapi.com/v1/current.json?key=264a3e88da964890af3172939240904&q=faridabad';
        const response=await Axios.get(reqUrl);
        console.log(response.data);
        return;   
    } catch (error) {
        console.log(error);
    }
}