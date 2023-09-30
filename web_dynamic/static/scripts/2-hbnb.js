// function for listen for changes in checkbox
const arrCheckedByID = [];

function updateCheckBox () {
  const checkboxes = $('.amenities input[type="checkbox"]');

  checkboxes.on('click', function () {
    const isChecked = $(this).prop('checked');
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if (isChecked) {
      // push checked amenityId
      arrCheckedByID.push(amenityId, amenityName);
    } else {
      // find the index of amenityId in the array y delete
      const index = arrCheckedByID.indexOf(amenityId);
      if (index !== -1) {
        arrCheckedByID.splice(index, 1);
      }
      // find the name of amenityId in the array y delete
      const name = arrCheckedByID.indexOf(amenityName);
      if (name !== -1) {
        arrCheckedByID.splice(name, 1);
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

$(document).ready(function () {
  updateCheckBox();
  checkAPIStatus();
});
