angular.module('Eggly', [])
    .controller('MainControllerr', function ($scope) {
        $scope.currentCategory = null;
        $scope.setCurrentCategory = function (category) {
            $scope.currentCategory = category;
            $scope.cancelCreating();
            $scope.cancelEditing();
        }
        $scope.isCurrentCategory = function (categoryName) {
            return $scope.currentCategory !== null && $scope.currentCategory.name === categoryName;
        }

        //----------------------------------------------
        //CREATE AND EDIT STATES
        //----------------------------------------------

        $scope.isCreating = false;
        $scope.isEditing = false;
        $scope.startCreating = function () {
            $scope.isCreating = true;
            $scope.isEditing = false;
        }
        $scope.cancelCreating = function () {
            $scope.isCreating = false;
        }

        $scope.startEditing = function () {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }
        $scope.cancelEditing = function () {
            $scope.isEditing = false;
        }
        $scope.shouldShowCreating= function () {
            return $scope.currentCategory && !$scope.isEditing;
        }
        $scope.shouldShowEdditing= function () {
            return $scope.isEditing && !$scope.isCreating;
        }

        $scope.categories = [
            {"id": 0, "name": "Development"},
            {"id": 1, "name": "Design"},
            {"id": 2, "name": "Exercise"},
            {"id": 3, "name": "Humor"}
        ];

        $scope.bookmarks = [
            {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
            {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development"},
            {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design"},
            {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design"},
            {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise"},
            {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise"},
            {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor"},
            {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor"},
            {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor"}
        ];
    });