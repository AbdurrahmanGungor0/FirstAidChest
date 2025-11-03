var app = angular.module('app', ['ionic', 'ngStorage', 'ngCordova']);

//#region Global Constants
var siteLink = '/json/';
app.constant('Constants', {
    Links: {
        siteLink: siteLink,
        getAllMedicaments: siteLink + 'all-medicaments.json',
        refreshMedicaments: siteLink + 'all-medicaments.json',
        updateMedicament: siteLink + '',
        getMedicament: siteLink + '',
        deleteMedicament: siteLink + '',
        getInventoryMedicaments: siteLink + '',
        searchMedicaments: siteLink + 'search-medicaments.json'
    }
});
//#endregion

app.run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hidezKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        //#region Global Variables
        app.value('Values', {
            deviceId: ionic.Platform.device().uuid
        });
        //#endregion

        var db = $cordovaSQLite.openDB({ name: "nextflow.db" });
        $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)');

        //var database = $cordovaSQLite.openDB({ name: "InventoryDatabase" });

        //$cordovaSQLite.execute = function () {
        //    var query = "CREATE TABLE IF NOT EXISTS PersonalInventory (Id INTEGER PRIMARY KEY ASC,Name TEXT, Description TEXT, CreateDate DATE)";
        //    $cordovaSQLite.execute(database, query)
        //        .then(function (res) {
        //            console.log("insertId: " + res.insertId);
        //        }, function (err) {
        //            console.error(err);
        //        });
        //};
    });
});

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function ($httpProvider, $stateProvider, $urlRouterProvider) {
    //$httpProvider.interceptors.push('httpInterceptor');
    $stateProvider

      .state('tabs', {
          url: '/tabs',
          abstract: true,
          templateUrl: 'templates/tabs/tabs.html'
      })

      .state('tabs.inventory', {
          url: '/inventory',
          views: {
              'tab-inventory': {
                  templateUrl: 'templates/tabs/inventory.html',
                  controller: 'InventoryController'
              }
          }

      })

      .state('tabs.medicaments', {
          url: '/medicament',
          views: {
              'tab-medicaments': {
                  templateUrl: 'templates/tabs/medicaments.html',
                  controller: 'MedicamentsController'
              }
          }

      })

      .state('tabs.settings', {
          url: '/settings',
          views: {
              'tab-settings': {
                  templateUrl: 'templates/tabs/settings.html',
                  controller: 'SettingsController'
              }
          }

      })


    $urlRouterProvider.otherwise('/tabs/inventory');
}]);
