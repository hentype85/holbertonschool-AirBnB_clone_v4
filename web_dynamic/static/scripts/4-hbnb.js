// function for listen for changes in checkbox
const arrCheckedByID = [];

function updateCheckBox () {
  const checkboxes = $('.amenities input[type="checkbox"]');

  checkboxes.on('click', function () {
    const isChecked = $(this).prop('checked');
    const amenityId = $(this).data('id');

    if (isChecked) {
      // push checked amenityId
      arrCheckedByID.push(amenityId);
    } else {
      // find the index of amenityId in the array y delete
      const index = arrCheckedByID.indexOf(amenityId);
      if (index !== -1) {
        arrCheckedByID.splice(index, 1);
      }
    }
    // show log
    console.log(arrCheckedByID);
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

// function to make a POST request to places_search endpoint
function searchPlaces () {
  $.ajax({
    url: 'http://localhost:5001/api/v1/places_search/',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({ amenities: arrCheckedByID }),
    success: function (data) {
      $('section.places').empty();

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

      // show log
      console.log(data);
    }
  });
}

// document loaded
$(document).ready(function () {
  updateCheckBox();
  checkAPIStatus();

  // search button
  const btn = $('button');
  btn.on('click', () => {
    searchPlaces();
  });
});
