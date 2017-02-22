angular.module('starter.services', ['ngResource'])
 .constant("apiURL","http://nichepharma.com/medicine4all-backend/public/api/")

.factory('Announcement', ['$resource', 'apiURL', function ($resource, apiURL) {
  return $resource(apiURL + "announcements/:id", null, {
      // 'update': {
      //     method: 'PUT'
      // }
  });


}])


;
