function getApi() {
    var requestUrl = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8"


    fetch(fequestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (var i = 0; i<data.length; i++) {
                
            }

        })


}
