// global var 
//var npsapiRootUrl = "https://developer.nps.gov/api/v1/"
//var npsapiKey = "s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8"
// $(document).ready(function() {
//     $('select').formSelect();
// });
var stateCode = ""
// var selectedState = document.getElementById("state-select")
// selectedState.addEventListener("select", assignSelectedState)
// function assignSelectedState(event){
//     event.preventDefault()
//     console.log("hello")
//     console.log(event.target)
// }
//Grab input from search form
let searchInput = document.getElementById('search-form');
searchInput.addEventListener('click', getSearchInput);
function getSearchInput(event) {
  event.preventDefault();
  let searchFormat = document.getElementById('search-format').value.trim();
 
 console.log(searchFormat)
};

// };
//dom element ref
//put the document.quertSelector for the dropdown and target it by ID. will need to


//use bulma istead of materiaize


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
