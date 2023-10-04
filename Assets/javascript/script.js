// global var 
//var npsapiRootUrl = "https://developer.nps.gov/api/v1/"
//var npsapiKey = "s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8"

//Grab input from search form
let searchInput = document.getElementById('search-form');
searchInput.addEventListener('click', getSearchInput);
function getSearchInput(event) {
  event.preventDefault();
  let searchFormat = document.getElementById('search-format').value.trim();
 
 console.log(searchFormat)
};
let searchFormat = document.getElementById('search-format')
var stateCode = "UT"
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

function renderParks(data, currentDiv) {    
    console.log(currentDiv)
    var parkName=$("#park-name")
    var parkCity=$("#park-city")
    var parkLoc=$("#park-loc")
    var parkUrl=$("#park-url")

    parkName.text(data.name)
    parkCity.text(data.city)
    parkLoc.text(`Location: ${data.addresses.line1}`)
    parkUrl.text(`URL: ${data.url}`)

    currentDiv.append(cityH2);
    currentDiv.append(tempP);
    currentDiv.append(windSp);
    currentDiv.append(humidity);
}