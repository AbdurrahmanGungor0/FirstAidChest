/**
 * Created by Abdurrahman on 14.11.2015.
 */

app.factory('authanticateFactory', ['$http', '$q', '$sessionStorage', function ($http, $q, $sessionStorage) {
  var factory = {};
  factory.login = function (userName, password) {
    var deferred = $q.defer();

    $http.post(Constants.Links.siteLink + 'token', {
      'grant_type': 'password',
      'username': userName,
      'password': password
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (resp) {
      $sessionStorage.token=resp.data.access_token;
      deferred.resolve(resp);
    }, function (resp) {
      deferred.reject(resp);
    });
    return deferred.promise;
  };

  factory.isAuthenticated = function () {
    var token = $sessionStorage.token;
    if (token !== null) {
      return true;
    }
    else {
      return false;
    }
  };

  factory.logout=function(){
    var token = $sessionStorage.token;
    if(token!==null){
      delete $sessionStorage.token;
    }
    $state.go('authenticate.login');
  };
  return factory;
}])
;
