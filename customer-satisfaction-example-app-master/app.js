var dataHeaders = ['x', 'North', 'South'];

// Example data
var exampleData1 = [
    ['2015-01-01', 30, 50],
    ['2015-01-02', 200, 20],
    ['2015-01-03', 100, 10],
    ['2015-01-04', 400, 40],
    ['2015-01-05', 150, 15],
    ['2015-01-06', 250, 25]
];
var exampleData2 = [[58]];
var exampleData3 = [
    ['2015-01-01', 2.1, 2.5],
    ['2015-01-02', 2.5, 1],
    ['2015-01-03', 4, 4],
    ['2015-01-04', 3, 1.5],
    ['2015-01-05', 2.2, 2.5],
    ['2015-01-06', 3, 5]
];
var exampleData4 = [[91.4]];

// Fetch data
domo.get('/data/v1/chart1')
    .then(convertDataObjectToArray)
    .then(drawChart1)
    .catch(function() {
        console.log('Using sample data for chart 1');
        drawChart1(exampleData1);
    });

domo.get('/data/v1/chart2')
    .then(convertDataObjectToArray)
    .then(drawChart2)
    .catch(function() {
        console.log('Using sample data for chart 2');
        drawChart2(exampleData2);
    });

domo.get('/data/v1/chart3')
    .then(convertDataObjectToArray)
    .then(drawChart3)
    .catch(function() {
        console.log('Using sample data for chart 3');
        drawChart3(exampleData3);
    });

domo.get('/data/v1/chart4')
    .then(convertDataObjectToArray)
    .then(drawChart4)
    .catch(function() {
        console.log('Using sample data for chart 4');
        drawChart4(exampleData4);
    });

// Functions to draw charts with c3
function drawChart1(data) {
    // Add header data
    data.unshift(dataHeaders);

    c3.generate({
        bindto: '#chart1',
        data: {
            x: 'x',
            rows: data
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            },
            y: {
                tick: {
                    count: 5
                }
            }
        },
        size: {
            height: 250
        },
        legend: {
            position: 'right'
        },
        color: {
            pattern: ['#90c4e3', '#fb8d34']
        }
    });
}

function drawChart2(data) {
    drawDonutChart(data, '#chart2');
}

function drawChart3(data) {
    // Add header data
    data.unshift(dataHeaders);

    c3.generate({
        bindto: '#chart3',
        data: {
            x: 'x',
            rows: data,
            type: 'bar'
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            },
            y: {
                tick: {
                    count: 5
                }
            }
        },
        size: {
            height: 250
        },
        legend: {
            position: 'right'
        },
        color: {
            pattern: ['#90c4e3', '#fb8d34']
        }
    });
}

function drawChart4(data) {
    drawDonutChart(data, '#chart4');
}

function drawDonutChart(data, target) {
    // Put percent data in the right format
    var percent = data[0][0];
    var newData = [
        ['Satisfactory', percent],
        ['Unsatisfactory', 100 - percent]
    ];

    c3.generate({
        bindto: target,
        data: {
            columns: newData,
            type: 'donut'
        },
        gauge: {
        },
        size: {
            height: 250
        },
        legend: {
            show: false
        },
        color: {
            pattern: ['#90c4e3', '#31699c']
        },
        donut: {
            label: {
                show: false
            },
            title: function() {
                return percent + '%';
            }
        }
    });
}

function convertDataObjectToArray(data) {
    var newData = data.map(function(d) {
        var newArray = [];
        for (var item in d) {
            newArray.push(d[item]);
        }
        return newArray;
    });

    return newData;
}
