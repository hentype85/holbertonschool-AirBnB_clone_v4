$(document).ready(function () {

    const arrCheck = [];
  
    // update checkbox
    function updateCheckBox() {
        let h4 = $(".Amenities h4");
        h4.text("Selected Amenities: " + arrCheck.join(", "));
    }

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
});
