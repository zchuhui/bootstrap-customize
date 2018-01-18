
require.config({
  paths: {
    "jquery": "./lib/jquery-3.2.1.min",
    "jquery.validate": "./lib/jquery.validate",
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
            message: '密码不能为空'
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
            message: '邮箱地址不能为空'
          }
        }
      }
    }
  });

});

