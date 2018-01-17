
require.config({
  paths: {
    "jquery":"./lib/jquery-3.2.1.min",
    "jquery.validate":"./lib/jquery.validate"
  }
});

require(["jquery","jquery.validate"], function(){

  $("form").validate();

});

