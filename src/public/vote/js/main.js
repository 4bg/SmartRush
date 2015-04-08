require.config({
  paths: {
    'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min',
    'jqueryMobile': 'http://cdnjs.cloudflare.com/ajax/libs/jquery-mobile/1.4.5/jquery.mobile.min',
    'text': 'http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text'
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

require(['controllers/loader'], function() {});

