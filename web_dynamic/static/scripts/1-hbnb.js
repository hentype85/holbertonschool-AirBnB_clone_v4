// function for listen for changes in checkbox
const arrCheckedByID = [];
const arrCheckedByName = [];

function updateCheckBox () {
  const checkboxes = $('.amenities input[type="checkbox"]');

  checkboxes.on('click', function () {
    const isChecked = $(this).prop('checked');
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if (isChecked) {
      // push checked amenityId
      arrCheckedByID.push(amenityId, amenityName);
      arrCheckedByName.push(amenityName);
    } else {
      // find the index of amenityId in the array y delete
      const index = arrCheckedByID.indexOf(amenityId);
      if (index !== -1) {
        arrCheckedByID.splice(index, 1);
        arrCheckedByName.splice(index, 1);
      }
      // find the name of amenityId in the array y delete
      const name = arrCheckedByID.indexOf(amenityName);
      if (name !== -1) {
        arrCheckedByID.splice(name, 1);
        arrCheckedByName.splice(index, 1);
      }
    }

    // show log
    console.log(arrCheckedByID);

    // show list of names in h4
    $('.amenities h4').text(arrCheckedByName.join(', '));
  
  });
}

$(document).ready(function () {
  updateCheckBox();
});
