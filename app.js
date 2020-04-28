const request =require('request')
const url = 'https://api.darksky.net/forecast/5730d209a25118fa5bc7c3dc410a32c2/37.8267,-122.4233?lang=en'
request({url:url,json:true},(error,response)=>{
     const data = response.body
     console.log(`${data.daily.data[0].summary} It is currently ${data.currently.temperature} degrees out . There is a ${data.currently.precipProbability} chance of rain .`);
     
    
    
})