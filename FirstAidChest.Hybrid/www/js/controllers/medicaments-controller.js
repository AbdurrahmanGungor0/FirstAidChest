/**
 * Created by abdur on 22.12.2015.
 */

'use strict';

app.controller('MedicamentsController', ['$scope', 'medicamentFactory', '$ionicActionSheet', function ($scope, medicamentFactory, $ionicActionSheet) {

    //#region Variables
    var medicamentActionSheet;

    $scope.form = {
        searchingItem: ''
    };
    $scope.medicaments = [];
    //#endregion

    //Functions
    $scope.searchMedicament = function () {
        medicamentFactory.searchMedicament($scope.form.searchingItem).then(function (resp) {
            $scope.medicaments = resp.data;
        });
    };
    $scope.medicamentAction = function () {
        medicamentActionSheet = $ionicActionSheet.show({
            buttons: [
              { text: 'Ýlaçlarýma Ekle' }
            ],
            titleText: 'Ýlaç Ýþlemleri',
            cancelText: 'Ýptal',
            cancel: function () {
              
            },
            buttonClicked: function (index) {
                if (index === 0) {

                }
            }
        });
    };

    //Init
    var init = function () {
        medicamentFactory.getAllMedicament().then(function (resp) {
            $scope.medicaments = resp.data;
        });
    };

    init();
}]);
