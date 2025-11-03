/**
 * Created by abdur on 21.12.2015.
 */

'use strict';

app.factory('medicamentFactory', ['$http', '$q', 'Constants', function ($http, $q, Constants) {
    var factory = {};

    factory.getAllMedicament = function () {
        var deferred = $q.defer();
        $http.get(Constants.Links.getAllMedicaments).then(function (resp) {
            deferred.resolve(resp);
        }, function (resp) {
            deferred.reject(resp);
        });
        return deferred.promise;
    };

    factory.getInventoryMedicaments = function () {
        var deferred = $q.defer();
        $http.get(Constants.Links.getInventoryMedicaments, { deviceId: Variables.deviceId }).then(function (resp) {
            deferred.resolve(resp);
        }, function (resp) {
            deferred.reject(resp);
        });
        return deferred.promise;
    };

    factory.searchMedicament = function () {
        var deferred = $q.defer();
        $http.get(Constants.Links.searchMedicaments, { deviceId: Variables.deviceId }).then(function (resp) {
            deferred.resolve(resp);
        }, function (resp) {
            deferred.reject(resp);
        });
        return deferred.promise;
    };

    return factory;
}]);
