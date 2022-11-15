$(function () {
  $('#effect').addClass('hide');
  $('#tabs').tabs();
});

$(function () {
  function runEffect() {
    var selectedEffect = $('#effectTypes').val();

    var options = {};
    if (selectedEffect === 'scale') {
      options = { percent: 50 };
    } else if (selectedEffect === 'size') {
      options = { to: { width: 200, height: 60 } };
    }

    $('#effect').toggle(selectedEffect, options, 500);
  }

  $('#button').on('click', function () {
    runEffect();
  });
});

$(function () {
  function getApi() {
    var username = $('#github').val();

    $('#form').submit(function (event) {
      event.preventDefault();
    });

    $.get('https://api.github.com/users/' + username, function (result) {
      console.log(result);
    });
  }

  $('#search-btn').on('click', function () {
    getApi();
  });
});
