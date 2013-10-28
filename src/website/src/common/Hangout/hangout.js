angular.module('pm-hangout', [])

.factory('Hangout', function($http) {
        return {
            attend: function(data) {
                return $http.post('/1.0/attendee', data)
                    .then(function(result) {return result.data});
            },
            getAttendees: function() {
                return $http.get('/1.0/attendees').then(function(result) {return result.data});
            }
        }
    })