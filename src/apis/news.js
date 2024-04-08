import axios from 'axios';
export const getNewsDetails=async()=>{
    try {
        const reqUrl=`https://newsapi.org/v2/everything?q=Apple&apiKey=72a2f1e035fa4410b5bdd9cc2c8a118b`;
        // await is always used with async function
        // there are 2 wasy to handle promises 
        //1. then catch -> it waits for all lines to get executed, 
        //2. async await-> it uses async function so it does not wait for all lines to get executed if it takes some time
        
        // await keyword pause the execution of a function until a promise is resolved
        const response=await axios.get(reqUrl);
        console.log(response.data.articles);
        return response.data.articles[6];
    } catch (error) {
        console.log(error);
        alert("something went wrong please try again later");
    }    
}