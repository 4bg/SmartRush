exports.getFormattedDate = function(dateStr) {
  if (!dateStr) {
    date = new Date();
  } else {
    var date = new Date(dateStr);
  }

  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
}