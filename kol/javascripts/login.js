
require.config({
  paths: {
    "jquery": "./lib/jquery-3.2.1.min",
    "bootstrapValidator": "./lib/bootstrapValidator"
  }
});

require(["jquery", "bootstrapValidator"], function ($) {

  $('form').bootstrapValidator({
    message: 'This value is not valid',
    // 提示图标
    feedbackIcons: {
      //valid: 'glyphicon glyphicon-ok',
      //invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      password: {
        message: '密码验证失败',
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
      email: {
        validators: {
          notEmpty: {
            message: 'email can not be empty!'
          }
        }
      }
    }
  });

});

