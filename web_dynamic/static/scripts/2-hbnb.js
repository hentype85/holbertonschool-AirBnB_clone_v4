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

$(document).ready(function () {
  updateCheckBox();
  checkAPIStatus();
});
