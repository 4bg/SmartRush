require.config({
  paths: {
    "jquery": 'http://code.jquery.com/jquery-1.10.2.min',
    "jqueryMobile": 'http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min'
  }
});

require(['jquery', 'jqueryMobile'], function($, Mobile){
  $(document).on("pageinit", "#add-vote-page", function() {
    $("#add-vote-btn").on("click", function() {
      alert("!!");
    })
  });
});