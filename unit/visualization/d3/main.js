const margin = 80,
    width = 960,
    height = 500,
    barWidth = Math.floor(width / 6) - 10
    c10 = d3.scale.category10();

var new_num = [0, 0, 0, 0, 0, 0];

function d3basic() {
    var svg = d3.select('#svg1')
        .attr({
            'width': width + margin,
            'height': height + margin * 2,
            'transform': 'translate(' + margin + ', 0)'
        });

    chartData = [
        {x: 0, y: Math.floor(Math.random()*200)},
        {x: 1, y: Math.floor(Math.random()*200)},
        {x: 2, y: Math.floor(Math.random()*200)},
        {x: 3, y: Math.floor(Math.random()*200)},
        {x: 4, y: Math.floor(Math.random()*200)},
        {x: 5, y: Math.floor(Math.random()*200)},
    ]

    var xScale = d3.scale.linear().domain([0, 6]).range([0, width]);

    svg.selectAll('rect')
        .data(chartData)
        .enter()
        .append('rect')
        .attr({
            'fill': (d, i) => (c10(i)),
            'x': (d, i) => (xScale(i) + margin + 1),
            'y': (d) => (height - d.y),
            'width': barWidth - 22,
            'height': (d) => (d.y),
            'transform': 'translate(' +  width * (0.02) + ', ' + 0 + ')',
        })
    svg.selectAll('.text')
        .data(chartData)
        .enter()
        .append('text')
        .classed('text', true)
        .text((d) => (d.y))
        .attr({
            'fill': '#000',
            'x': (d, i) => (xScale(i) + margin + barWidth / 2),
            'y': (d) => (height - d.y - margin),
        })
}

d3basic();

function d3_databinding() {
    var svg = d3.select('#svg2')
        .attr({
            'width': width + margin,
            'height': height + margin * 2,
            'transform': 'translate(' + margin + ', 0)'
        });
    
    var xScale = d3.scale.linear().domain([0, 6]).range([0, width]);
    var yScale = d3.scale.linear().domain([0, 500]).range([0, height]);
    var yScale2 = d3.scale.linear().domain([0, 500]).range([height, 0]);
    
    d3.json('./course.json', (err, data) => {
    var plot_data = [0, 0, 0, 0, 0, 0, 0];
    var sum = 0;
    for (let i = 0; i < data.length; i++) {
        var time = data[i].time.split('[');
        if (time[1]) time = time[1].split(']')[0]
        if (plot_data[parseInt(time)] != NaN) {
        plot_data[parseInt(time) - 1]++;
        sum++;
        }
    }
    console.log(plot_data);
    console.log(sum);
    chartData = [
        {name:'星期一', x: 0, y: plot_data[0]},
        {name:'星期二', x: 1, y: plot_data[1]},
        {name:'星期三', x: 2, y: plot_data[2]},
        {name:'星期四', x: 3, y: plot_data[3]},
        {name:'星期五', x: 4, y: plot_data[4]},
        {name:'其他', x: 5, y: (plot_data[5] + plot_data[6])},
    ]
    
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom')
        .ticks(6)
        .tickFormat((i) => {
        return (chartData[i]) ? chartData[i].name : '';
        });
    
    var yAxis = d3.svg.axis()
        .scale(yScale2)
        .orient('left');
    
    svg.append("g")
        .attr({
            "class": "x axis",
            "transform": "translate(" + margin + "," + (height + margin) + ")",
            'fill': '#ffffff'
        })
        .call(xAxis);
    
    svg.append("g")
        .attr({
            "class": "y axis",
            "transform": "translate(" + margin + ", " + margin + ")",
            'fill': '#ffffff'
        })
        .call(yAxis);
    
    svg.select('.x.axis').selectAll('.tick text').attr("dx", width * 0.05);
    svg.select('.x.axis').selectAll('.tick line').attr('transform', 'translate(' + width * 0.05 + ', 0)');
    
    svg.selectAll('rect')
        .data(chartData)
        .enter()
        .append('rect')
        .attr({
            'fill': (d, i) => (c10(i)),
            'x': (d, i) => (xScale(i) + margin + 1),
            'y': margin,
            'width': barWidth - 22,
            'height': height,
            'transform': 'translate(' +  width * (0.02) + ', ' + 0 + ')',
        })
    
    svg.selectAll('.bar')
        .data(chartData)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr({
            'fill': '#fff',
            'x': (d, i) => (xScale(i) + margin),
            'y': margin,
            'width': barWidth - 20,
            'height': height,
            'transform': 'translate(' +  width * (0.02) + ', ' + 0 + ')',
        })
        .transition()
        .duration(1500)
        .attr({
            'height': (d) => (height - yScale(d.y)),
        })
        
    
    svg.selectAll('.text')
        .data(chartData)
        .enter()
        .append('text')
        .classed('text', true)
        .text((d) => (0))
        .attr({
            'fill': '#000',
            'x': (d, i) => (xScale(i) + margin + barWidth / 2),
            'y': height + margin,
        })
        .transition()
        .duration(1500)
        .attr({
            'y': (d) => (height - yScale(d.y) + margin / 2)
        })
        .tween('number', (d) => {
            var i = d3.interpolateRound(new_num[d.x], d.y);
            new_num[d.x] = d.y;
            return function (t) {
                this.textContent = i(t);
            }
        })
        
    })
}

d3_databinding();

function d3_animation(department) {
    var svg = d3.select('#svg2');

    d3.json('./course.json', (err, data) => {
        var plot_data = [0, 0, 0, 0, 0, 0, 0];
        var sum = 0;
        for (let i = 0; i < data.length; i++) {
        if (data[i].depart_id == department) {
            var time = data[i].time.split('[');
            if (time[1]) time = time[1].split(']')[0]
            if (plot_data[parseInt(time)] != NaN) {
                plot_data[parseInt(time) - 1]++;
                sum++;
            }
        }
        }

        console.log(plot_data)

        var yScale = d3.scale.linear().domain([0, sum]).range([0, height]);
        var yScale2 = d3.scale.linear().domain([0, sum]).range([height, 0]);
        var yAxis = d3.svg.axis()
            .scale(yScale2)
            .orient('left');

        if (document.getElementById('checkAnima').checked == true) {
            svg.selectAll('.y.axis').transition().duration(1000).call(yAxis);
        } else {
            svg.selectAll('.y.axis').call(yAxis);
        }

        chartData = [
            {x: 0, y: plot_data[0]},
            {x: 1, y: plot_data[1]},
            {x: 2, y: plot_data[2]},
            {x: 3, y: plot_data[3]},
            {x: 4, y: plot_data[4]},
            {x: 5, y: (plot_data[5] + plot_data[6])},
        ]

        if (document.getElementById('checkAnima').checked == true) {
            svg.selectAll('.bar')
                .data(chartData)
                .transition()
                .duration(1500)
                .attr({
                    'height': (d) => (height - yScale(d.y)),
                })

            svg.selectAll('.text')
                .data(chartData)
                .transition()
                .duration(1500)
                .attr({
                    'y': (d) => (height - yScale(d.y) + margin / 2)
                })
                .tween('number', (d) => {
                    var i = d3.interpolateRound(new_num[d.x], d.y);
                    new_num[d.x] = d.y;
                    return function (t) {
                    this.textContent = i(t);
                    }
                })
        } else {
            svg.selectAll('.bar')
                .data(chartData)
                .attr({
                    'height': (d) => (height - yScale(d.y)),
                })

            svg.selectAll('.text')
                .data(chartData)
                .text((d) => (d.y))
                .attr({
                    'y': (d) => (height - yScale(d.y) + margin / 2)
                })
        }
    })
}