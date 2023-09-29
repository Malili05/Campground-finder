// global var 
//var npsapiRootUrl = "https://developer.nps.gov/api/v1/"
//var npsapiKey = "s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8"

//dom element ref
//put the document.quertSelector for the dropdown and target it by ID. will need to 
var stateCode = "UT"
// the value of state will be the user input fromt the drop down menu. we will set the value to "" after the user input will grab the state. 

//function to display parks by state as selected from drop down
function getParkByState() {
    var requestUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8`


    fetch(requestUrl)
        .then(function (response){
            return response.json();
            
        }).then(function(data){
            console.log(data)
        })


                
            }

            getParkByState()


