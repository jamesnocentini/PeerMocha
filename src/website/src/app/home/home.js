/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.state',
  'plusOne',
  'ui.bootstrap.alert'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, Hangout ) {

        $scope.toggleBooking = function(value) {
            if (value === 'yes') {
                $scope.isAttending = true;
            } else {
                $scope.isAttending = false;
            }
        };

        $scope.attendee = {};

        $scope.saveAttendee = function() {
            Hangout.attend($scope.attendee)
                .then(
                    function (res) {
                        $scope.attendees = res;
                        $scope.response_message = 'Great. See you Thursday!'
                    },
                    function (err) {
                        console.log(err);
                    }
                )
        }

        Hangout.getAttendees().then(
            function(res) {
                $scope.attendees = res;
                if($scope.attendees.length > 4) {
                    $scope.full_message = 'This Hangout is full.'
                }
            },
            function(err) {
                console.log(err);
            }
        );

        $scope.canSave = function(form_name) {
            return $scope.attendee.$dirty && $scope.attendee.$valid;
        };


})

function AccordionDemoCtrl($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        },
        {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };
}

function AlertDemoCtrl($scope) {
    $scope.alerts = [
        { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({type: 'error', msg: "Another alert!"});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

}

function CollapseDemoCtrl($scope) {
    $scope.isCollapsed = false;
}

;

