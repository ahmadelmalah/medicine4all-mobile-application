angular.module('starter.services', ['ngResource'])
 .constant("apiURL","http://nichepharma.com/medicine4all-backend/public/api/")

.factory('Announcement', ['$resource', 'apiURL', function ($resource, apiURL) {
  return $resource(apiURL + "announcements/:id", null, {
      // 'update': {
      //     method: 'PUT'
      // }
  });
}])

.factory('Country', ['$resource', 'apiURL', function ($resource, apiURL) {
  return $resource(apiURL + "countries/:id", null, {
  });
}])

.factory('City', ['$resource', 'apiURL', function ($resource, apiURL) {
  return $resource(apiURL + "cities/:id", null, {
  });
}])


;
