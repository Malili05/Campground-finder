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
 getParkByState(searchFormat)
};

//function to display parks by state as selected from drop down
function getParkByState(stateCode) {

    var requestUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8`


    fetch(requestUrl)
        .then(function (response){
            return response.json();
            
        }).then(function(data){
            console.log(data)
            renderParks(data)
        })


                
            }

        

function renderParks(data) {    
    var parkName=$("#park-name")
    var parkCity=$("#park-city")
    var parkLoc=$("#park-loc")
    var parkUrl=$("#park-url")

    parkName.text(data.data[0].name)
    parkCity.text(data.data[0].city)
    // parkLoc.text(`Location: ${data.addresses.line1}`)
    // parkUrl.text(`URL: ${data.url}`)
 console.log(data.name)
    // document.append(cityH2);
    // document.append(tempP);
    // document.append(windSp);
    // document.append(humidity);

    //element.setAttribute("src", data.images.[0].url); //help with this. I am trying to pull the image url from the data
}