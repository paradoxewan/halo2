Template.sparkline.onRendered(function(){

    $("#sparkline7").sparkline([34, 43, 43, 35, 44, 32, 44, 52, 25], {
        type: 'line',
        lineColor: '#f6a821',
        fillColor: '#f6a821',
        width: '150',
        height: '20'
    });
    $("#sparkline2").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
        type: 'bar',
        barColor: '#f6a821',
        negBarColor: '#c6c6c6',
        width: '150',
        height: '20'
    });

    $("#sparkline3").sparkline([10, 2], {
        type: 'pie',
        sliceColors: ['#f6a821', '#ffffff'],
        width: '150',
        height: '20'
    });

    $("#sparkline4").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
        type: 'line',
        lineColor: '#f6a821',
        fillColor: '#f6a821',
        width: '150',
        height: '20'
    });

    $("#sparkline5").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        posBarColor: '#f6a821',
        negBarColor: '#ffffff',
        width: '150',
        height: '20'});


    $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ], {
        type: 'discrete',
        lineColor: '#f6a821',
        width: '150',
        height: '20'});

});