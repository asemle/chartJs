var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var color = Chart.helpers.color;
var config = {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
            borderColor: chartColors.red,
            pointBackgroundColor:chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: "My Second dataset",
            backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
            borderColor: chartColors.blue,
            pointBackgroundColor: chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        },]
    },
    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Radar Chart'
        },
        scale: {
          ticks: {
            beginAtZero: true
          }
        }
    }
};

window.onload = function() {
    myRadar = new Chart(document.getElementById("canvas"), config);
};

document.getElementById('randomizeData').addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });

    myRadar.update();
});

var colorNames = Object.keys(chartColors);
document.getElementById('addDataset').addEventListener('click', function() {
    var colorName = colorNames[config.data.datasets.length % colorNames.length];;
    var newColor = chartColors[colorName];

    var newDataset = {
        label: 'Dataset ' + config.data.datasets.length,
        borderColor: newColor,
        backgroundColor: color(newColor).alpha(0.2).rgbString(),
        pointBorderColor: newColor,
        data: [],
    };

    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());
    }

    config.data.datasets.push(newDataset);
    myRadar.update();
});

document.getElementById('addData').addEventListener('click', function() {
    if (config.data.datasets.length > 0) {
        config.data.labels.push('dataset #' + config.data.labels.length);

        config.data.datasets.forEach(function (dataset) {
            dataset.data.push(randomScalingFactor());
        });

        myRadar.update();
    }
});

document.getElementById('removeDataset').addEventListener('click', function() {
    config.data.datasets.splice(0, 1);
    myRadar.update();
});

document.getElementById('removeData').addEventListener('click', function() {
    config.data.labels.pop(); // remove the label first

    config.data.datasets.forEach(function(dataset) {
        dataset.data.pop();
    });

    myRadar.update();
});
