
const geoCode = require('./utils/geocode')
const foreCast = require('./utils/forecast')

geoCode("CAIRO",(error,data)=>{
    console.log("Error ",error);
    console.log("Data ",data);
    
    
})

foreCast(-75.7088,44.1545,(error,data)=>{
    console.log("Error ",error);
    console.log("Data ",data);
    
    
})