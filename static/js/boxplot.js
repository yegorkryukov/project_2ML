Plotly.d3.json("/boxplot", function(error, response) {
  
  var y0 = response[0]['atlantic_db'];
  var y1 = response[0]['bbc_db'];
  var y2 = response[0]['db_db'];
  var y3 = response[0]['guardian_db'];
  var y4 = response[0]['intercept_db'];
  var y5 = response[0]['mj_db'];
  var y6 = response[0]['nr_db'];
  var y7 = response[0]['politico_db'];
  var y8 = response[0]['slate_db'];
  var y9 = response[0]['washpost_db'];
  var y10 = response[0]['amercons_db'];
  var y11 = response[0]['breitbart_db'];
  var y12 = response[0]['dailywire_db'];
  var y13 = response[0]['tft_db'];
  var y14 = response[0]['foxnews_db'];
  var y15 = response[0]['hill_db'];
  var y16 = response[0]['nypost_db'];
  var y17 = response[0]['oann_db'];
  var y18 = response[0]['reason_db'];
  var y19 = response[0]['washtimes_db'];
  

  var trace0 = {
  y: y0,
  type: 'box',
  name: 'The Atlantic',
  marker: {color: "#1F45FC"}
  };

  var trace1 = {
  y: y1,
  type: 'box',
  name: 'BBC',
  marker: {color: "#2B60DE"}
  };

  var trace2 = {
    y: y2,
    type: 'box',
    name: 'Daily Beast',
    marker: {color: "#151B8D"}
  };

  var trace3 = {
    y: y3,
    type: 'box',
    name: 'The Guardian',
    marker: {color: "#151B54"}
  };

  var trace4 = {
    y: y4,
    type: 'box',
    name: 'The Intercept',
    marker: {color: "#2B547E"}
  };

  var trace5 = {
    y: y5,
    type: 'box',
    name: 'Mother Jones',
    marker: {color: "#737CA1"}
  };

  var trace6 = {
    y: y6,
    type: 'box',
    name: 'New Republic',
    marker: {color: "#3090C7"}
  };

  var trace7 = {
    y: y7,
    type: 'box',
    name: 'Politico',
    marker: {color: "#5CB3FF"}
  };

  var trace8 = {
    y: y8,
    type: 'box',
    name: 'Slate',
    marker: {color: "#0000A0"}
  };

  var trace9 = {
    y: y9,
    type: 'box',
    name: 'Washington Post',
    marker: {color: "#1589FF"}
  };

  var trace10 = {
    y: y10,
    type: 'box',
    name: 'American Conservative',
    marker: {color: "#800517"}
  };

  var trace11 = {
    y: y11,
    type: 'box',
    name: 'Breitbart',
    marker: {color: "#9F000F"}
  };

  var trace12 = {
    y: y12,
    type: 'box',
    name: 'Daily Wire',
    marker: {color: "#C24641"}
  };

  var trace13 = {
    y: y13,
    type: 'box',
    name: 'The Fiscal Times',
    marker: {color: "#E41B17"}
  };

  var trace14 = {
    y: y14,
    type: 'box',
    name: 'Fox News',
    marker: {color: "#CA226B"}
  };

  var trace15 = {
    y: y15,
    type: 'box',
    name: 'The Hill',
    marker: {color: "#F75D59"}
  };

  var trace16 = {
    y: y16,
    type: 'box',
    name: 'NY Post',
    marker: {color: "#E77471"}
  };

  var trace17 = {
    y: y17,
    type: 'box',
    name: 'OANN',
    marker: {color: "#990012"}
  };

  var trace18 = {
    y: y18,
    type: 'box',
    name: 'Reason',
    marker: {color: "#800517"}
  };

  var trace19 = {
    y: y19,
    type: 'box',
    name: 'Washington Times',
    marker: {color: "#F70D1A"}
  };

  var plotData = [trace0];    

  Plotly.newPlot('leftDiv', plotData);

  var leftData = [trace0, trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9];
  var rightData = [trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19];

  layout = {
    //title: '',
    yaxis: {
      title: 'Words per Article',
      range: [0,5000],
      showgrid: true,
      zeroline: true,
      //dtick: 5,
      gridcolor: 'rgb(255, 255, 255)',
      gridwidth: 1,
      zerolinecolor: 'rgb(255, 255, 255)',
      zerolinewidth: 2
    },
    margin: {
      l: 80,
      r: 30,
      b: 80,
      t: 100
    },
    paper_bgcolor: 'white',
    plot_bgcolor: 'white'
  };

  Plotly.newPlot('leftDiv', leftData, layout);

  layout = {
    // title: 'Left-leaning media',
    yaxis: {
      title: 'Words per Article',
      range: [0,5000],
      showgrid: true,
      zeroline: true,
      //dtick: 5,
      gridcolor: 'rgb(255, 255, 255)',
      gridwidth: 1,
      zerolinecolor: 'rgb(255, 255, 255)',
      zerolinewidth: 2
    },
    margin: {
      l: 80,
      r: 30,
      b: 80,
      t: 100
    },
    paper_bgcolor: 'white',
    plot_bgcolor: 'white'
  };

  Plotly.newPlot('rightDiv', rightData, layout);

});