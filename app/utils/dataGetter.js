const dataGetter = {
    fetchCountry: (url) => {
        console.log("fetching country")

    },
    fetchCity: (url) => {
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
                    }else{
                        reject();
                    }
                });            
        });

        
    }
}

export default dataGetter