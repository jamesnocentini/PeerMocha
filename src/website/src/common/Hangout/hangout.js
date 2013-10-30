angular.module('pm-hangout', [])

.factory('Hangout', function($http) {
        return {
            attend: function(data) {
                return $http.post('/1.0/attendee', data)
                    .then(function(result) {return result.data});
            },
            getAttendeesByGroup: function(group) {
                return $http.get('/1.0/attendees/' + group).then(function(result) {return result.data});
            }
        }
    })