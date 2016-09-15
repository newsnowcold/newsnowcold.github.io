(function (angular) {
'use strict';

    angular
        .module('skillsModule')
        .controller('skillsCtrl', ['$scope', 
        						  function ($scope) {

        						      if (!google.visualization) {
        						          google.charts.load('current', { 'packages': ['wordtree'] });        						         
        						      } 

        						      google.charts.setOnLoadCallback(drawChart);        						      

        						      function drawChart() {

        						          var data = google.visualization.arrayToDataTable(
                                           [
                                              ['id', 'childLabel', 'parent', 'Points', { role: 'style' }],
                                              [0, 'What are my skills', -1, 1, 'WHITE'],
                                              [1, 'Front end', 0, 1, 'black'],
                                              [2, 'Back end', 0, 1, 'black'],
                                              [3, 'AngularJS', 6, 3, 'black'],
                                              [4, 'Angular material', 3, 1, 'black'],
                                              [5, 'JQuery', 6, 1, 'black'],
                                              [6, 'Javascript', 1, 1, 'black'],
                                              [7, 'CSS', 1, 1, 'black'],
                                              [8, 'Bootstrap', 7, 5, 'black'],
                                              [9, 'HTML', 1, 1, 'black'],
                                              [10, 'C#', 2, 1, 'black'],
                                              [11, 'Database', 2, 1, 'black'],
                                              [12, '.NET', 10, 1, 'black'],
                                              [13, 'MSSQL', 11, 1, 'black'],
                                              [14, 'Azure', 0, 1, 'black']
                                           ]
                                         );

        						          var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
        						          chart.draw(data, {
        						              format: 'explicit',
        						              backgroundColor: '#cba',
        						              word: 'cats',
        						              colors: ['red', 'black', 'green']
        						          });

                              var chartContainer = $('#wordtree_basic').find('[dir="ltr"]'),
                                  chart = chartContainer.find('[aria-label="A chart."]'),
                                  rect = chart.find('rect');

                                  chartContainer.css('width', '100%');
                                  chart.css('width', '100%');   
                                  rect.css('width', '100%');
                                                                                                 
        						      }
        }])

})(angular)