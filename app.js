const yargs= require('yargs')
const country=process.argv[2];
if(!country ){
    console.log('plase provide string')
}else{
    const geocode=require('./utils/geocode')
    const forecast=require('./utils/forecast')

    //object destructuring
    // geocode(country,(error,data) => {

    geocode(country,(error,{longtitude,latitude,location}) => {
        if(error){
            return console.log(error)
        }
        // console.log('Data : ',data)
        // forecast(data.longtitude, data.latitude, (error, forecastData) => {
        forecast(longtitude, latitude, (error, forecastData) => {
            if(error){
                console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
// console.log(process.argv[2])


