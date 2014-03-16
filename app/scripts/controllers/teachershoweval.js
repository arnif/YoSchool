'use strict';

//show eval statistics
angular.module('yoSchoolApp')
  .controller('TeachershowevalCtrl', function ($scope, $routeParams, TeacherFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var id = $routeParams.evaluationID;

    $scope.getDoneEvalByID = function() {
      var promise = TeacherFactory.resultEval(id);

      promise.then(function(data) {
        console.log(data);
      });
    };


    $scope.chart = {
    labels : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets : [
        {
            fillColor : 'rgba(151,187,205,0)',
            strokeColor : '#e67e22',
            pointColor : 'rgba(151,187,205,0)',
            pointStrokeColor : '#e67e22',
            data : [4, 3, 5, 4, 6]
        },
        {
            fillColor : 'rgba(151,187,205,0)',
            strokeColor : '#f1c40f',
            pointColor : 'rgba(151,187,205,0)',
            pointStrokeColor : '#f1c40f',
            data : [8, 3, 2, 5, 4]
        }
    ],
};

  $scope.options =  {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,

        //String - The colour of each segment stroke
        segmentStrokeColor : '#fff',

        //Number - The width of each segment stroke
        segmentStrokeWidth : 24,

        //The percentage of the chart that we cut out of the middle.
        percentageInnerCutout : 50,

        //Boolean - Whether we should animate the chart
        animation : true,

        //Number - Amount of animation steps
        animationSteps : 100,

        //String - Animation easing effect
        animationEasing : 'easeOutBounce',

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,

        //Function - Will fire on animation completion.
        onAnimationComplete : null
    };



  });
