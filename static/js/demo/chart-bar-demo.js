

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [4215, 5312, 6251, 7841, 9821, 14984, 16000, 14000, 18000, 15000, 22000],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '$' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});

//광고비&매출
// https://www.chartjs.org/docs/latest/samples/other-charts/stacked-bar-line.html
var ctx = document.getElementById("mixedChart");
const mixedChart = new new Chart(ctx, {
  type: 'bar',
  data: {
      datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40],
          // this dataset is drawn below
          order: 2
      }, {
          label: 'Line Dataset',
          data: [10, 10, 10, 10],
          type: 'line',
          // this dataset is drawn on top
          order: 1
      }],
      labels: ['January', 'February', 'March', 'April']
  },
  options: options
});

// https://www.chartjs.org/docs/latest/samples/other-charts/stacked-bar-line.html
const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      stack: 'combined',
      type: 'bar'
    },
    {
      label: 'Dataset 2',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      stack: 'combined'
    }
  ]
};

// -------------------

document.addEventListener('DOMContentLoaded', function() {
  const config = {
      type: 'line',
      data: data,
      options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Chart.js Stacked Line/Bar Chart'
              }
          },
          scales: {
              y: {
                  stacked: true
              }
          }
      },
  };
  const DATA_COUNT = 7;
  const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

  const labels = Utils.months({count: 7});
  const data = {
      labels: labels,
      datasets: [
          {
              label: 'Dataset 1',
              data: Utils.numbers(NUMBER_CFG),
              borderColor: Utils.CHART_COLORS.red,
              backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
              stack: 'combined',
              type: 'bar'
          },
          {
              label: 'Dataset 2',
              data: Utils.numbers(NUMBER_CFG),
              borderColor: Utils.CHART_COLORS.blue,
              backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
              stack: 'combined'
          }
      ]
  };

  const myChart = new Chart(
      document.getElementById('myChart'),
      config
  );
});

//test
const mixedChart1 = new Chart(ctx, {
  type: 'bar',
  data: {
      datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40],
          // this dataset is drawn below
          order: 2
      }, {
          label: 'Line Dataset',
          data: [10, 10, 10, 10],
          type: 'line',
          // this dataset is drawn on top
          order: 1
      }],
      labels: ['January', 'February', 'March', 'April']
  },
  options: options
});