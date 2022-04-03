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
                    console.log("It was OK!")
                    return response.json()
                }
            }) 
            .then(data => {
                /*
                    Most relevant place seems to be the first element (place) in the list  
                    therefore we will check if the first element (place) is a country otherwise
                    we inform user that no place is found
                */
                if(data.totalResultsCount !== 0 ){
                    let mostPopulatedCities = []
                    let counter = 0
                    let index = 0
                    /*
                        Trying to find 
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
                    reject();
                }
                reject();
            })
        })

    },
    fetchCityPopulation: (cityName) => {
        const url = 'http://api.geonames.org/search?name_equals=' + cityName + '&type=json&username=weknowit'

        return new Promise((resolve, reject) => {
            fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then(response => {
                    if(response.ok){
                        console.log("It was OK!")
                        return response.json()
                    }
                }) 
                .then(data => {
                    /* Most relevant place seems to be the first element (place) in the list  
                        therefore we will check if the first element (place) is a city otherwise
                        we inform user that no place is found
                    */
                    if(data.totalResultsCount !== 0 && data.geonames[0].fclName.includes("city")){
                        resolve(data.geonames[0].population)
                    }
                    reject();
                });            
        });

        
    }
}

export default dataGetter