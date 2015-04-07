define(['jquery', 'jqueryMobile', 'text!../../partials/new-option.html'], function($, jqm, newOptionTmpl){
  $(document).on('pageinit', '#add-vote-page', function() {
    $('#add-vote-btn').on('click', function() {
      if ($('#vote-options').children().length > 4) {
        alert("最多5项");
        return;
      }

      $('#vote-options').append(newOptionTmpl).listview('refresh');
      $('.options').trigger('create');
    });

    $('#vote-options').delegate('.ui-input-text::after', 'click', function() {
      $(this).parent().remove();
    })
  });
  $.mobile.initializePage();
});