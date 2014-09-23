var svg = d3.select("svg");

// var circle = svg.selectAll("circle")
//     .data([32, 57, 112, 360, 420, 1500]);

// var circleEnter = circle.enter().append("circle");

// circle.style("fill", "cornflowerblue");
// circle.attr("r", function(d) { return Math.sqrt(d); });
// circle.attr("cx", function() { return Math.random() * 720; });

// circleEnter.attr("cy", 60);
// circleEnter.attr("cx", function() { return Math.random() * 720; });
// circleEnter.attr("r", function(d) { return Math.sqrt(d); });


// svg.selectAll("circle")
//     .data([32, 57, 112, 293])
//   .enter().append("circle")
//     .style("fill", "cornflowerblue")
//     .attr("cy", function() { return Math.random() * 500; })
//     .attr("cx", function() { return Math.random() * 720; })
//     .attr("r", function(d) {return Math.sqrt(d); });


// var circle = svg.selectAll("circle")
//     .data([32,57]);

// circle.exit().remove();

var circle = svg.selectAll("circle")
    .data([32, 57, 293], function(d) { return d; });

circle.enter().append("circle")
    .attr("cy", function() { return Math.random() * 120; })
    .attr("cx", function() { return Math.random() * 720; })
    .attr("r", function(d) {return Math.sqrt(d); });

circle.exit().remove();
