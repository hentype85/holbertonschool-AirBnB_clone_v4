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

    console.log(arrCheck);
  });
}

$(document).ready(function () {
  updateCheckBox();
});
