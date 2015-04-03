require.config({
  paths: {
    "jquery": 'http://code.jquery.com/jquery-1.10.2.min',
    "jqueryMobile": 'http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min'
  },
  shim: {
    'jqueryMobile': ['jquery', 'jquery.mobile-config']
  }
});

define('jquery.mobile-config', ['jquery'], function ($) {
  $(document).on('mobileinit', function () {
    $.mobile.autoInitializePage = false;
  });
});

require(['jquery', 'jqueryMobile'], function($){
  $(document).on("pageinit", "#add-vote-page", function() {
    $("#add-vote-btn").on("click", function() {
      $("#vote-options").append('<li class="option"><a>option</span></a>').listview('refresh');

      $(".option").on("click", function() {
        alert("haha");
      });
    });
  });
  $.mobile.initializePage();
});