exports.getFormattedDate = function(dateStr) {
  if (!dateStr) {
    date = new Date();
  } else {
    var date = new Date(dateStr);
  }

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  return year + '-' + month + '-' + day;
}