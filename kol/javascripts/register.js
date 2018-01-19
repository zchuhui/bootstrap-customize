
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

