// function for listen for changes in checkbox
function updateCheckBox () {
  const arrCheck = [];
  $(':checkbox').change(function () {
    const checkboxId = this.id;

    if (this.checked) {
      // add ID
      arrCheck.push(checkboxId);
    } else {
      // remove ID
      const i = arrCheck.indexOf(checkboxId);
      if (i !== -1) {
        arrCheck.splice(i, 1);
      }
    }
  });
}

// function to check API status and update div#api_status
function checkAPIStatus () {
  $.ajax({
    url: 'http://localhost:5001/api/v1/status/',
    type: 'GET',
    success: function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
}

// Function to make a POST request to places_search endpoint
function searchPlaces () {
  $.ajax({
    url: 'http://localhost:5001/api/v1/places_search/',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: '{}',
    success: function (data) {
      $.each(data, (i, place) => {
        $('section.places').append(`
        <article>
          <div class="title_box">
              <h2>${place.name}</h2>
                  <div class="price_by_night">${place.price_by_night}</div>
          </div>
          <div class="information">
              <div class="max_guest">${place.max_guest} Guests</div>
                  <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                   <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
              </div>
          <div class="description">${place.description}</div>
          </article>
          `);
      });
    }
  });
}

$(document).ready(function () {
  updateCheckBox();
  checkAPIStatus();
  searchPlaces();
});
