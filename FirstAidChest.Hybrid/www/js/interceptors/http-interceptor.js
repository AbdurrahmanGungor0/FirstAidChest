/**
 * Created by abdur on 25.11.2015.
 */

'use strict';

/**
 * Created by Abdurrahman on 28.10.2015.
 */

'use strict';

app.factory('httpInterceptor', ['$location', '$sessionStorage', '$q', function ($location, $sessionStorage, $q) {
  var factory = {};

  factory.request = function (config) {
    var contentType = config.headers['Content-Type'];
    if (contentType && contentType === 'application/x-www-form-urlencoded') {
      config.transformRequest = function (data) {
        var str = [];
        for (var p in data)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        return str.join("&");
      };
    }

    if ($sessionStorage.token) {
      config.headers['token'] = $sessionStorage.token;
    }

    return config;
  };
  factory.responseError = function (response) {
    if (response.status === 400) {
      return $q.reject(response);
    }
    if (response.status === 401) {
      $location.path('/signin');
    }
  };

  return factory;
}]);
