$(document).ready(function () {

  const arrCheck = [];

  /*update checkbox*/
  function updateCheckBox() {
    let h4 = $(".Amenities h4");
    h4.text("Selected Amenities: " + arrCheck.join(", "));
  }

  /*listen changes in checkbox*/
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
