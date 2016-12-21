(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','UserPreferencesService'];
function SignUpController(MenuService, UserPreferencesService) {
  console.log("SignUpController");
  var signUpCtrl = this;
    
  signUpCtrl.submit = function () {
    console.log("submit");
      
    //console.log(signUpCtrl.user.favorite);
    //console.log(MenuService);
    var promise = MenuService.getMenuItem(signUpCtrl.user.favorite);
    signUpCtrl.successMsg = null;  
    signUpCtrl.error = null;
    signUpCtrl.menuitem = null;
  
    promise.then(function (response) {
      //console.log(response);
      if (response) {
        UserPreferencesService.savePreferences(response, signUpCtrl.user);
        
        signUpCtrl.successMsg = "Your information has been saved"
        //console.log(signUpCtrl.preferences);
        //Call user preferences service
      } else {
        signUpCtrl.error = "No such menu number exists";
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

    /*
      function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");*/
      
  };
}

})();
