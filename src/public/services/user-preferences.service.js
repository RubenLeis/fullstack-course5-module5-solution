(function() {
"use strict";

angular.module('common')
.service('UserPreferencesService', UserPreferencesService);

/**
 * Used to store user preferences 
 *
 * This is intended to be injected any time we need some preferences data
 * 
 **/
function UserPreferencesService() {
  var service = this;
  var _preferences = null;

  /**
   * Load the current user an item preferences
   */
  service.savePreferences = function(menuItem, user) {
    _preferences = new Object();  
    _preferences.menuItem = menuItem;
    _preferences.user = user;
    console.log(_preferences);
  };


  service.getPreferences = function() {
    return _preferences;
  };
    
  service.getUser = function() {
    return _preferences.user;
  };
    
   service.getMenuItem = function() {
    return _preferences.menuItem;
  };

}


})();
