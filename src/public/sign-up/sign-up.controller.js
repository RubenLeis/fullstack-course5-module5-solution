(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  console.log("SignUpController");
  var signUpCtrl = this;
    
  signUpCtrl.submit = function () {
    console.log("submit");
      
    //console.log(signUpCtrl.user.favorite);
    //console.log(MenuService);
    var promise = MenuService.getMenuItem(signUpCtrl.user.favorite);
    signUpCtrl.successMsg = null;  
    signUpCtrl.error = null;
    signUpCtrl.item = null;
  
    promise.then(function (response) {
      //console.log(response);
      if (response) {
        signUpCtrl.item = response;
        signUpCtrl.successMsg = "Your information has been saved"
      } else {
        signUpCtrl.error = "No such menu number exists";
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

    
  };
}

})();
