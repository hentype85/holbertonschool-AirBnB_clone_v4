$(document).ready(function () {

    const arrCheck = [];
  
    // update checkbox
    function updateCheckBox() {
        let h4 = $(".Amenities h4");
        h4.text("Selected Amenities: " + arrCheck.join(", "));
    }

    // listen for changes in checkbox
    $(":checkbox").change(function () {
  
        let amenityId = this.id;
  
        if (this.checked) {
            // if is checked, add Id
            arrCheck.push(amenityId);
        } else {
            // if is unchecked, quit the Id
            let index = arrCheck.indexOf(amenityId);
            if (index !== -1) {
                arrCheck.splice(index, 1);
            }
        }
        // update checkbox
        updateCheckBox();
    });

    // function to check API status and update div#api_status
    function checkAPIStatus() {
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/status/',
            type: 'GET',
            success: function (data) {
                if (data.status === 'OK') {
                    $('#api_status').addClass('available');
                } else {
                    $('#api_status').removeClass('available');
                }
            },
            error: function () {
                $('#api_status').removeClass('available');
            }
        });
    }
    // initial check of API status
    checkAPIStatus();

    // Function to make a POST request to places_search endpoint
    function searchPlaces() {
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: function (data) {
                for (const place of data) {
                    const article = document.createElement("article");
                    article = `<div class="title_box">
                                    <h2>${place.name}</h2>
                                    <div class="price_by_night">${place.price_by_night}</div>
	                            </div>
	                            <div class="information">
                                    <div class="max_guest">${place.max_guest} Guest${place.max_guest >= 1 ? 's' : ''}</div>
                                    <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms >= 1 ? 's' : ''}</div>
                                    <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms >= 1 ? 's' : ''}</div>
	                            </div>
                                <div class="description">${place.description}</div>`;
                    $('.places').append(article);
                  }
            }
        });
    }
// Call the searchPlaces function to load places on page load
searchPlaces();

});
