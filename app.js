
const geoCode = require('./utils/geocode')
const foreCast = require('./utils/forecast')



const address = process.argv[2]
if(!address){
    console.log("there is no address");
    
}else{
    geoCode(address,(error,data)=>{
   
        if(error){
          return  console.log(error);
            
        } else{
            foreCast(data.longitude,data.lititude,(error,foreCasteData)=>{
                if(error){
                    return console.log(error);
                    
                }else{

                    console.log("Data ",foreCasteData);
                    console.log(data.location);
                    
                }
                
                
            })
        }   
    
    
})
}


