/*青岛研锦网络科技有限公司   版权所有*/
function drawCharts(container, options) {
  var myChart = echarts.init(document.getElementById(container), 'shine');
  myChart.setOption(options);
}
