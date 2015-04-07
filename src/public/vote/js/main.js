require.config({
  paths: {
    'jquery': 'http://code.jquery.com/jquery-1.10.2.min',
    'jqueryMobile': 'http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min',
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

