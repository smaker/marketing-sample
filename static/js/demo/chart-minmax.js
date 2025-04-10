// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Suggested Min and Max Settings'
      }
    },
    scales: {
      y: {
        // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
        suggestedMin: 30,

        // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
        suggestedMax: 50,
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
      data: [10, 30, 39, 20, 25, 34, -10],
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.CHART_COLORS.red,
    },
    {
      label: 'Dataset 2',
      data: [18, 33, 22, 19, 11, 39, 30],
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.CHART_COLORS.blue,
    }
  ]
};

const mixedChart = new Chart(ctx, {
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