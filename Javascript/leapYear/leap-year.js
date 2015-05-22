function leapYear(year) {
  if (year % 4 === 0 && year % 100 != 0) {
    return true;
  } else {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 ===0) {
      return true
    } else {
      return false;
    }
  }
}

$(document).ready(function() {
  $('.container').on('click','button',function() {
    $(this).closest('.container').find('span').hide();
    var valuz = $('input:text').val();
    var output = "";

    //BASIC LOGIC TO VALIDATE YEAR INPUT
    if (isNaN(valuz) || valuz.length != 4) {
      output = "Please use a year with four digits..."
      $('input:text').val('');
    } else {
      if (leapYear(valuz)) {
        output = valuz + " is a leap year!!"
      } else {
        output = valuz + " is not a leap year!!"
      };
    };
    //DISPLAY OUTPUT TO PAGE
    $(this).closest('.container').find('span').text(output).fadeIn();
  });
});
