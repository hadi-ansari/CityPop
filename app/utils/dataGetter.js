/*
    We can define general function which may be used 
    in several components. In this way we do not need to 
    repeat the same code
*/

const dataGetter = {
    fetchMostPopulatedCities: (countryName) => {
        const url = 'http://api.geonames.org/search?q=' + countryName + '&cities=cities15000&orderby=population&type=json&username=weknowit'
        return new Promise((resolve, reject) => {
            fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                else{
                    throw new Error
                }
            }) 
            .then(data => {
                if(data.totalResultsCount !== 0 ){
                    
                    let mostPopulatedCities = []
                    let counter = 0
                    let index = 0
                    /*
                        Trying to find three most populated cities in this country. We validate 
                        cities by looking at their county name and comparing that with provided 
                        country name
                    */
                    while( counter < 3 ){
                        if(!data.geonames[index]){
                            break
                        }
                        else if(data.geonames[index].countryName.toLowerCase() === countryName){
                            mostPopulatedCities.push({"cityName": data.geonames[index].toponymName, "cityPopulation": data.geonames[index].population})
                            counter++
                        }
                        index++
                    }

                    if(mostPopulatedCities.length > 0){
                        resolve(mostPopulatedCities)
                    }
                }
                reject()
            })
            .catch(()=> {
                reject()   // in case server responds with status code other than 200
            })
        })

    },
    fetchCityPopulation: (cityName) => {
        const url = 'http://api.geonames.org/search?q=' + cityName + '&type=json&username=weknowit'

        return new Promise((resolve, reject) => {
            fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then(response => {
                    if(response.ok){
                        return response.json()
                    }
                    else {
                        throw new Error
                    }
                }) 
                .then(data => {

                    /* 
                        Most relevant place seems to be the first element (place) in the list  
                        therefore we will validate the first element (place). If it is not valid
                        we inform user that no place is found by rejecting this promise
                    */
                   try{
                       if(data.totalResultsCount == 0) { reject() }
                       let index = 0
                       while(true){
                           if(!data.geonames[index]) { 
                               reject()
                               break
                           }
                           else if( data.geonames[index].fclName.includes("city") 
                           && data.geonames[index].population > 0 
                           && (data.geonames[index].toponymName.toLowerCase() === cityName || data.geonames[index].name.toLowerCase() === cityName)){
                                resolve(data.geonames[index].population)
                                break
                           }
                           index++
                       }
                    }
                   catch(error){
                        reject()
                   }
                    
                })
                .catch(()=>{
                    reject() // in case server responds with status code other than 200
                })         
        })

        
    }
}

export default dataGetter