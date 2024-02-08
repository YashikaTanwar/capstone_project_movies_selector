import axios from 'axios';
export const getNewsDetails=async()=>{
    try {
        const reqUrl=`https://newsapi.org/v2/everything?q=Apple&apiKey=72a2f1e035fa4410b5bdd9cc2c8a118b`;
        // await is always used with async function
        const response=await axios.get(reqUrl);
        console.log(response.data.articles);
        return response.data.articles[18];
    } catch (error) {
        console.log(error);
        alert("something went wrong please try again later");
    }    
}