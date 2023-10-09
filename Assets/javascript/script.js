//var npsapiKey = "s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8"

var savedParks = JSON.parse(localStorage.getItem("visit-list")) || [];

//Grab input from search form
let searchInput = document.getElementById("search-form");
searchInput.addEventListener("change", getSearchInput);
function getSearchInput(event) {
  event.preventDefault();
  let searchFormat = document.getElementById("search-format").value.trim();

  console.log(searchFormat);
  getParkByState(searchFormat);
}

//function to display parks by state as selected from drop down
function getParkByState(stateCode) {
  var requestUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=s6p9WyTqkZ8EGpaLI4YUraP4LPf0BEkmFtlLC3H8`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderParks(data);
    });
}

function renderParks(data) {
  var parksContainerEl = document.getElementById("cards-container");
  parksContainerEl.innerHTML = "";

  for (let i = 0; i < data.data.length; i++) {
    var parkEl = document
      .getElementById("card-template")
      .content.cloneNode(true);

    var parkName = parkEl.getElementById("park-name");
    var parkCity = parkEl.getElementById("park-city");
    var parkLoc = parkEl.getElementById("park-loc");
    var parkUrl = parkEl.getElementById("park-url");
    var parkSave = parkEl.getElementById("save-park");

    parkName.textContent = data.data[i].name;
    parkCity.textContent = data.data[i].addresses[0].city;
    parkLoc.textContent = `Location: ${data.data[i].addresses[0].line1}`;
    parkUrl.src = `${data.data[i].images[0].url}`;

    parkSave.addEventListener("click", function (event) {
      console.log("click");
      console.log(event.currentTarget);

      var saveButton = $(event.currentTarget);
      var parkName = saveButton.siblings("#park-name");
      var parkImage = saveButton.siblings("#park-url");
      var parkCity = saveButton.siblings("#park-city");

      console.log(parkName.text());
      console.log(parkImage.attr("src"));

      var savePark = parkName.text();
      var saveImage = parkImage.attr("src");
      var saveCity = parkCity.text();

      savedParks.push({
        name: savePark,
        image: saveImage,
        city: saveCity
      });

      localStorage.setItem("visit-list", JSON.stringify(savedParks));

      loadSavedParks();
      // parksSaveEl.append(savePark)
    });

    parksContainerEl.append(parkEl);

    // $("button").click();
  }
}

// load saved Parks

function loadSavedParks() {
  var parksSaveEl = document.getElementById("visit-list");
  parksSaveEl.innerHTML = "";

  for (i = 0; i < savedParks.length; i++) {
    console.log(savedParks[i]);

    var parkEl = document
      .getElementById("card-template")
      .content.cloneNode(true);

    // remove unwanted elements
    var parkLoc = parkEl.getElementById("park-loc");
    parkLoc.remove();
    var parkSave = parkEl.getElementById("save-park");
    parkSave.remove();

    var parkName = parkEl.getElementById("park-name");
    var parkCity = parkEl.getElementById("park-city");
    var parkUrl = parkEl.getElementById("park-url");

    parkName.textContent = savedParks[i].name;
    parkCity.textContent = savedParks[i].city;
    parkUrl.src = savedParks[i].image;

    parksSaveEl.append(parkEl);
  }
}

loadSavedParks();

// var savePark = event.currentTarget."#park-name"
// console.log("#park-name".value)
// var id = event.currentTarget.parentElement.id
// localStorage.setItem(id, textArea.value)
