angular.module('starter.controllers', [])

//main controller
.controller('AppCtrl', function($scope, $ionicModal, $timeout, Announcement) {
  // Declaring objects that store data from main modals
  $scope.loginData = {};
  $scope.Announcements_POST_Data = {};

  // Bulk of modals that could be invoked from the main menu (main modals)
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $ionicModal.fromTemplateUrl('templates/Announcements_POST.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalAnnouncements_POST = modal;
  });

  // All required functions for opening modals
  $scope.login = function() {
    $scope.modal.show();
  };
  $scope.Announcements_POST = function() {
    $scope.modalAnnouncements_POST.show();
  };

  // All required functions for closing modals
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.closeAnnouncements_POST = function() {
    $scope.modalAnnouncements_POST.hide();
  };

  // Perform the modals action
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  $scope.doAnnouncements_POST = function() {
      var newAnnouncement = new Announcement();
       newAnnouncement.desc = $scope.Announcements_POST_Data.desc;
       newAnnouncement.$save(function(announcement){
         alert('Your announcement is saved');
       });

      $scope.closeAnnouncements_POST();
  };



})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
