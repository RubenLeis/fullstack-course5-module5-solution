(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  console.log("SignUpController");
  var signUpCtrl = this;
  /*
  signUpCtrl.user.firstname= "Ruben";
  signUpCtrl.user.lastname= "Leis";
  signUpCtrl.user.email= "rubenleis@gmail.com";
  signUpCtrl.user.phone= "615051949";
  signUpCtrl.user.favorite = "A1";*/
  
    
  signUpCtrl.submit = function () {
    console.log("submit");
    console.log(signUpCtrl.user.favorite);
    console.log(MenuService);
    signUpCtrl.item = MenuService.getMenuItem(signUpCtrl.user.favorite);
    console.log(signUpCtrl.item);  
    /*
    console.log(signUpCtrl.user.firstname);
    console.log(signUpCtrl.user.lastname);
    console.log(signUpCtrl.user.email);
    console.log(signUpCtrl.user.phone);
    console.log(signUpCtrl.user.favorite);
    */
  };
}

})();
