var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 420]);

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");
barEnter.style("width", function(d) { return x(d) + "px"; });
barEnter.text(function(d) { return d; });

// Concise code for above
// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return d; });


var body = d3.select("body");
var div = body.append("div");
div.html("hello world");

d3.select("body")
  .style("color", "white")
  .style("background-color", "CornflowerBlue");

var section = d3.selectAll("section");
var divs = section.append("div");
divs.html("hello worldsss");

section.append("div").html("First!");

section.append("div").html("Second");

d3.selectAll("section")
  .attr("class", "special")
  .append("div")
  .html("Hello again");




