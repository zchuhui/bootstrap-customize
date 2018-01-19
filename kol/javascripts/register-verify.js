require.config({
  paths: {
    "jquery": "./lib/jquery-3.2.1.min",
    "bootstrapValidator": "./lib/bootstrapValidator"
  }
});

require(["jquery", "bootstrapValidator"], function ($) {

  // form validator
  $('form').bootstrapValidator({
    message: 'This value is not valid',
    // 提示图标
    feedbackIcons: {
      //valid: 'glyphicon glyphicon-ok',
      //invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      'brand-name': {
        validators: {
          notEmpty: {
            message: 'Brand Name can not be empty!'
          }
        }
      },
      'brand-website': {
        validators: {
          notEmpty: {
            message: 'Brand Website can not be empty!'
          }
        }
      },
      'company': {
        validators: {
          notEmpty: {
            message: 'Company can not be empty!'
          }
        }
      },
      'contact-name': {
        validators: {
          notEmpty: {
            message: 'Contact Name can not be empty!'
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: 'password can not be empty!'
          },
          stringLength: {
            min: 6,
            max: 18,
            message: 'password length error'
          },
        }
      },
      're-password': {
        validators: {
          notEmpty: {
            message: 'Re-enter Passoword can not be empty!'
          },
          stringLength: {
            min: 6,
            max: 18,
            message: 'password length error'
          },
        }
      },
    }
  });


  // placeholder position
  $('.form-auto-placeholder input').focus(function () {
    $(this).siblings(".placeholder").animate({
      'top': -10,
      'font-size': 12,
    }).css({
      'color': '#999',
      'font-weight': 'bold'
    });
  }).blur(function () {
    if ($(this).val() == "") {
      $(this).siblings(".placeholder").animate({
        'top': 15,
        'font-size': 14
      }).css({
        'color':'#999',
        'font-weight': 'normal'
      });;
    }
  })



});
