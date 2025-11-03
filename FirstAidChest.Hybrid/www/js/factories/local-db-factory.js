/**
 * Created by Abdurrahman on 14.11.2015.
 */

app.factory('localDbFactory', ['$http', '$q', '$cordovaSQLite', function ($http, $q, $cordovaSQLite) {

    var factory = {};

    factory.database = null;

    factory.init = function () {
        var database = $cordovaSQLite.openDB({ name: "InventoryDatabase" });

        $cordovaSQLite.execute = function () {
            var query = "CREATE TABLE IF NOT EXISTS PersonalInventory (Id INTEGER PRIMARY KEY ASC,Name TEXT, Description TEXT, CreateDate DATE)";
            $cordovaSQLite.execute(database, query)
                .then(function (res) {
                    console.log("insertId: " + res.insertId);
                }, function (err) {
                    console.error(err);
                });
        };
    };

    factory.refreshDatabase = function () {
        //var deferred = $q.defer();
        //$http.get(Constants.Medicament.refreshMedicaments, { deviceId: Variables.deviceId }).then(function (resp) {
        //    var data = resp.data;

        //    database.transaction(function (tx) {
        //        for (var i in data) {
        //            tx.executeSql('INSERT INTO Inventory (Id,Name) VALUES (' + data.Id + ',' + data.Name + ')');
        //        }
        //    });
        //    deferred.resolve(resp.data);
        //});
        //return deferred.promise;
    };
    return factory;
}]);
