define(['jquery', 'jqueryMobile', 'text!../../partials/new-option.html'], function($, jqm, newOptionTmpl){
  function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }

  $(document).on('pageinit', '#add-vote-page', function() {
    $('#add-vote-btn').on('click', function() {
      //do not accept the options more than 5
      if ($('#vote-options').children().length > 4) {
        alert("最多5项");
        return;
      }

      //refresh the page to apply jquerymobile ui for the dynamic components
      $('#vote-options').append(newOptionTmpl).listview('refresh');
      $('.options').trigger('create');
    })

    $('#vote-options').delegate('.btn-delete', 'click', function() {
      $(this).parent().parent().remove();
    })

    $('form.new-vote').submit(function(e) {
      //to prevent the default submit event
      e.preventDefault();

      var param = {
        title: $('#vote-title').val(),
        description: $('#vote-description').val(),
        options: [],
        isMultiple: $('#allow-multiple-choice').is(':checked'),
        isDisplayAfterVote: $('#result-display-after-vote').is(':checked'),
        isAnonymous: $('#is-anonymous').is(':checked'),
        code: getQueryString('code')
      };

      //put the options into the params
      $('#vote-options').find('.option-content').each(function(index, element) {
        param.options.push($(element).val());
      });

      //parameters validation
      if((!param.title) || ('' === param.title)) {
        alert('标题不能为空');
        return;
      }

      if ((!param.options.length) || (0 === param.options.length)) {
        alert('至少需要一个选项！');
        return;
      }

      //config ajax options and send the request
      $.ajaxSetup({ contentType: 'application/json' });
      $.post('/votes', JSON.stringify(param)).success(function(data) {
        alert(data);
      }).error(function() {
        alert('error!');
      });
    })
  });
  $.mobile.initializePage();
});