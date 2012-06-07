google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawVisualization);
google.setOnLoadCallback(drawChart);

function drawVisualization() {
  // Data from core HIKL-15413 (Drupal Gardens)
  var data = google.visualization.arrayToDataTable([
    ['Configuration', 'Min Response Time', 'Max Response Time', '90% Line', 'Average'],
    ['S14', 1, 4637, 730, 306],
    ['S35', 1, 3624, 624, 255],
    ['S35-Byte', 1, 4144, 680, 259],
    ['S35-Log', 2, 3982, 661, 257],
    ['S35-L35', 2, 4276, 661, 265],
    ['S35-Byte-L35', 2, 5251, 648, 274],
    ['S35-Tier-L35', 1, 3905, 570, 241],
    ['S35-Tier-L35-Settings2-2', 1, 4655, 577, 245],
    ['S35-Tier-L35-Settings4-6', 1, 4124, 643, 258],
    ['LB-MA-S14-Byte', 1, 6001, 628, 252],
    ['LB-SL-S14-Byte', 1, 9151, 1221, 514],
    ['LB-MA-S35-Byte-L35', 4, 3750, 522, 210],
    ['LB-SL-S35-Byte-L35', 2, 7777, 1245, 541],
  ]);
  var options = {
     title : 'Solr Performance Tests Index of 4996 Documents',
     vAxis: {title: 'Milliseconds'},
     hAxis: {title: 'Configurations'},
     seriesType: 'bars',
     series: {3: {type: 'line'}},
     legend : {position: 'right'}
  };
  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);

  // Data from core ACDK-12656
  var data2 = google.visualization.arrayToDataTable([
    ['Configuration', 'Min Response Time', 'Max Response Time', '90% Line', 'Average'],
    ['S14-default', 2, 15818, 3681, 1053],
    ['S35-default', 1, 6702, 1811, 562],
    ['S35-ByteSize', 1, 8603, 1754, 562],
    ['S35-LogDoc', 1, 8377, 1773, 553],
    ['S35-default-L35', 2, 18318, 3575, 1050],
    ['S35-ByteSize-L35', 2, 8287, 2004, 618],
    ['S35-Tiered-L35', 1, 10070, 2562, 750],
    ['S35-Tiered-L35-Settings2-2', 1, 9394, 1714, 550],
    ['S35-Tiered-L35-Settings4-6', 2, 14193, 3490, 1020],
    ['LB-MA-S14-ByteSize', 3, 11976, 2431, 724],
    ['LB-SL-S14-ByteSize', 3, 14863, 3020, 1077],
    ['LB-MA-S35-ByteSize-L35', 3, 9117, 1760, 550],
    ['LB-SL-S35-ByteSize-L35', 3, 15347, 2228, 889],
    ['UB-LB-MA-S35-ByteSize', 0, 5916, 404, 159],
    ['UB-LB-SL-S35-ByteSize', 0, 4516, 336, 132],
  ]);
  var options2 = {
    title : 'Solr Performance Tests Index of 32912 Documents',
    vAxis: {title: 'Milliseconds'},
    hAxis: {title: 'Configurations'},
    seriesType: 'bars',
    series: {3: {type: 'line'}},
    legend : {position: 'right'}
  };
  var chart2 = new google.visualization.ComboChart(document.getElementById('chart_div2'));
  chart2.draw(data2, options2);
  // Data from core ACDK-12656
  var data4 = google.visualization.arrayToDataTable([
    ['Configuration','90% Line', 'Average'],
    ['S14-default', 3681, 1053],
    ['S35-default', 1811, 562],
    ['S35-ByteSize', 1754, 562],
    ['S35-LogDoc', 1773, 553],
    ['S35-default-L35', 3575, 1050],
    ['S35-ByteSize-L35', 2004, 618],
    ['LB-MA-S14-ByteSize', 2431, 724],
    ['LB-SL-S14-ByteSize', 3020, 1077],
    ['LB-MA-S35-ByteSize-L35', 1760, 550],
    ['LB-SL-S35-ByteSize-L35', 2228, 889],
    ['UB-LB-MA-S35-ByteSize', 404, 159],
    ['UB-LB-SL-S35-ByteSize', 336, 132],
  ]);
  var options4 = {
    title : 'Solr Performance Tests Index of 32912 Documents',
    vAxis: {title: 'Milliseconds'},
    hAxis: {title: 'Configurations'},
    seriesType: 'bars',
    series: {0: {type: 'line'}},
    legend : {position: 'right'}
  };
  var chart4 = new google.visualization.ComboChart(document.getElementById('chart_div4'));
  chart4.draw(data4, options4);

  // Data from core ACDK-12656
  var data5 = google.visualization.arrayToDataTable([
    ['Configuration', 'Min Response Time', 'Max Response Time', '90% Line', 'Average'],
    ['LB-MA-S14-ByteSize', 3, 11976, 2431, 724],
    ['LB-SL-S14-ByteSize', 3, 14863, 3020, 1077],
    ['LB-MA-S35-ByteSize-L35', 3, 9117, 1760, 550],
    ['LB-SL-S35-ByteSize-L35', 3, 15347, 2228, 889],
    ['UB-LB-MA-S35-ByteSize', 0, 5916, 404, 159],
    ['UB-LB-SL-S35-ByteSize', 0, 4516, 336, 132],
  ]);
  var options5 = {
    title : 'Solr Performance Tests Index of 32912 Documents',
    vAxis: {title: 'Milliseconds'},
    hAxis: {title: 'Configurations'},
    seriesType: 'bars',
    series: {3: {type: 'line'}},
    legend : {position: 'right'}
  };
  var chart5 = new google.visualization.ComboChart(document.getElementById('chart_div5'));
  chart5.draw(data5, options5);
}

function drawChart() {
  var data3 = new google.visualization.DataTable();
  data3.addColumn('string', 'Description');
  data3.addColumn('number', 'Segments of Small Index');
  data3.addColumn('number', 'Segments of Big Index');
  data3.addRows([
    ['S14-default', 3, 6],
    ['S35-default', 3, 6],
    ['S35-ByteSize', 3, 6],
    ['S35-default-L35', 3, 12],
    ['S35-ByteSize-L35', 3, 6],
    ['S35-Tiered-L35', 3, 9],
    ['S35-Tiered-L35-Settings2-2', 3, 6],
    ['S35-Tiered-L35-Settings6-4', 1, 1],
    ['LB-MA-S14-ByteSize', 3, 6],
    ['LB-SL-S14-ByteSize', 3, 7],
    ['LB-MA-S35-ByteSize', 3, 6],
    ['LB-SL-S35-ByteSize', 3, 6],
  ]);

  var options3 = {
    width: 600,
    height: 400,
    title: 'Segment size',
    hAxis: {title: '# Segments'},
    chartArea : {left: 200, right: 100},
    legend : {position: 'top'}
  };

  var chart3 = new google.visualization.BarChart(document.getElementById('chart_div3'));
  chart3.draw(data3, options3);
};