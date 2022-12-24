// Create chart
var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

// Create series
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

series.data = [{
    "name": "Home",
  "children": [{
  "name": "Food",
  "children": [{
    "name": "scallion pancake", "value": 3000
  }, {
    "name": "Chinese Hamburger", "value": 335
  }
              , {
    "name": "Spring rolls", "value": 335
  }]
}, {
  "name": "Cities",
  "children": [{
    "name": "ChongQing", "value": 335
  }, {
    "name": "Dali", "value": 335
  }, {
    "name": "HangZhou", "value": 3000
  }, {
    "name": "Xi an", "value": 1000
  }
              ]
}, {
  "name": "Culture",
  "children": [{
    "name": "Music", "value": 3000
  }, {
    "name": "Fashion", "value": 335
  }, {
    "name": "Sports", "value": 335
  }, {
    "name": "religion", "value": 1000
  }]
  
  },{
  "name": "About us",
  "children": [{
    "name": "Yukun", "value": 1000
  }, {
    "name": "Chongjun", "value": 1000
  }, {
    "name": "Decheng", "value": 1000
  }]
  }        ]
}];


// Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";
series.nodes.template.label.text = "{name}";

// Add labels
series.fontSize = 15;
series.minRadius = 40;
series.maxRadius = 80;

series.centerStrength= 0.5;