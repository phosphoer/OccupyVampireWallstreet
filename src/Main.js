function main()
{
  var e = new Engine();

  player1 = createPlayer(0, 0x440000, 0.0);
  // var player2 = createPlayer(1, 0xFF0000, 0.5);

  var tower = e.factory.createObject();
  tower.components.tower = new Tower(tower);
  tower.components.collider = new Collider(tower);
  tower.components.collider.width = tower.components.tower.sizeX;
  tower.components.collider.height = tower.components.tower.sizeZ;

  /*
  // var ui = $("<div />").appendTo($("body"));
  // ui.text("blah");
  // ui.css("position", "absolute");
  // ui.css("left", "200px");
  // ui.css("top", "10px");
  // ui.css("color", "#fff");

  var ui = $('<div id="placeholder" class="graph"></div>').appendTo($("body"));
  ui.css("position", "absolute");
  ui.css("left", "200px");
  ui.css("top", "10px");
  ui.css("opacity", "0.9");

  var container = $("#placeholder");

  // Determine how many data points to keep based on the placeholder's initial size;
  // this gives us a nice high-res plot while avoiding more than one point per pixel.
  var maximum = container.outerWidth() / 2 || 300;

  var data = [];

  function getRandomData() {

      if (data.length) {
          data = data.slice(1);
      }

      while (data.length < maximum) {
          var previous = data.length ? data[data.length - 1] : 50;
          var y = previous + Math.random() * 10 - 5;
          data.push(y < 0 ? 0 : y > 100 ? 100 : y);
      }

      // zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]])
      }

      return res;
  }

  series = [{
    data: getRandomData(),
    lines: {
      fill: true
    }
  }];

  var plot = $.plot(container, series, {
    grid: {
      borderWidth: 1,
      minBorderMargin: 20,
      labelMargin: 10,
      margin: {
        top: 8,
        bottom: 20,
        left: 20
      },
      markings: function(axes) {
        var markings = [];
        var xaxis = axes.xaxis;
        for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
          markings.push({ xaxis: { from: x, to: x + xaxis.tickSize }, color: "rgba(232, 232, 255, 0.0)" });
        }
        return markings;
      }
    },
    xaxis: {
      tickFormatter: function() {
        return "";
      }
    },
    yaxis: {
      min: 0,
      max: 110
    },
    legend: {
      show: true
    }
  });

  // Create the demo X and Y axis labels

  var yaxisLabel = $("<div class='axisLabel yaxisLabel'></div>")
    //.text("Response Time (ms)")
    .appendTo(container);

  // Since CSS transforms use the top-left corner of the label as the transform origin,
  // we need to center the y-axis label by shifting it down by half its width.
  // Subtract 20 to factor the chart's bottom margin into the centering.

  yaxisLabel.css("margin-top", yaxisLabel.width() / 2 - 20);

  // Update the random dataset at 25FPS for a smoothly-animating chart

  setInterval(function updateRandom() {
    series[0].data = getRandomData();
    plot.setData(series);
    plot.draw();
  }, 40);
  */

  // center tower on ground
  tower.position.set(0, 1, 0);

  var prefix = "res/skybox";
  var suffix = ".jpg";

  var materials = [];
  for(var i = 0; i < 6; ++i)
  {
   materials.push(new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(prefix + i + suffix), 
                                                side: THREE.BackSide}));
  }
  var skyGeometry = new THREE.CubeGeometry(100, 100, 100);

  var material = new THREE.MeshFaceMaterial(materials);

  var skybox = new THREE.Mesh(skyGeometry, material);
  JSEngine.graphics.scene.add(skybox);

  e.start();
}
