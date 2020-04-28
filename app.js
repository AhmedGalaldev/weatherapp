const request =require('request')
const url = 'https://api.darksky.net/forecast/5730d209a25118fa5bc7c3dc410a32c2/37.8267,-122.4233'
request({url:url},(error,response)=>{
     const data = JSON.parse(response.body)
     console.log(data.currently);
    
    
})