const request =require('request')
const url = 'https://api.darksky.net/forecast/5730d209a25118fa5bc7c3dc410a32c2/37.8267,-122.4233?lang=en'
request({url:url,json:true},(error,response)=>{
    if(error){
        console.log('there is no connection to weather service');
        
    }else if(response.body.error){
        console.log('there is something wrong in url');
        
    }else{
        const data = response.body
        console.log(`${data.daily.data[0].summary} It is currently ${data.currently.temperature} degrees out . There is a ${data.currently.precipProbability} chance of rain .`);
    }
  
     
    
    
})

// geocoding
const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWhtZWRnYWxhbGRldiIsImEiOiJjazlrazA0amYxM21yM2txNmUxNzZsZzVtIn0.3sgLw4tvjPPE3PIXdXYtaQ';
request({url:urlGeo,json:true},(error,response)=>{
    if(error){
        console.log('there is no connection to weather service');
        
    }else if(response.body.features.length==0){
        console.log('there is something wrong in url');
 
    }else{
        const data = response.body
        const longitude =data.features[0].center[0]
        const lititude =data.features[0].center[1]
        console.log(longitude , lititude);
    }
   
    
})
