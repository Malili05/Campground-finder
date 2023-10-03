// global var 
//var npsapiRootUrl = "https://developer.nps.gov/api/v1/"
//var npsapiKey = "s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8"
$(document).ready(function() {
    $('select').formSelect();
});


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

// so if I need to get the drop down o show names, but I need to change the var state code to abbrevieations. I need a list of each. this list and they need to match. 
            // var data = names();
            // returns
            //     [
            //         'Alabama',
            //         'Alaska',
            //         'Arizona',
            //         'Arkansas',
            //         'California',
            //         'Colorado',
            //         'Connecticut',
            //         'Delaware',
            //         'Florida',
            //         'Georgia',
            //         'Hawaii',
            //         'Idaho',
            //         'Illinois',
            //         'Indiana',
            //         'Iowa',
            //         'Kansas',
            //         'Kentucky',
            //         'Louisiana',
            //         'Maine',
            //         'Maryland',
            //         'Massachusetts',
            //         'Michigan',
            //         'Minnesota',
            //         'Mississippi',
            //         'Missouri',
            //         'Montana',
            //         'Nebraska',
            //         'Nevada',
            //         'New Hampshire',
            //         'New Jersey',
            //         'New Mexico',
            //         'New York',
            //         'North Carolina',
            //         'North Dakota',
            //         'Ohio',
            //         'Oklahoma',
            //         'Oregon',
            //         'Pennsylvania',
            //         'Rhode Island',
            //         'South Carolina',
            //         'South Dakota',
            //         'Tennessee',
            //         'Texas',
            //         'Utah',
            //         'Vermont',
            //         'Virginia',
            //         'Washington',
            //         'West Virginia',
            //         'Wisconsin',
            //         'Wyoming'
            //     ]