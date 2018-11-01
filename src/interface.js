$( document ).ready(function() {
  thermostat = new Thermostat
  getsavedstate()
  updatelabels()
  scrapeWeather($('#location_select').val())

  function updatelabels() {
    $('#temperature').text(thermostat.temp + " °C")
    $('#temperature').attr('class', thermostat.energyusage())
    $('#PS').text(thermostat.powersaver)
    $('#usage').text(thermostat.energyusage())
  }

  $( increaseTemp ).click(function( event ) {
      thermostat.add1()
      updatelabels()
  });
  $( decreaseTemp ).click(function( event ) {
      thermostat.minus1()
      updatelabels()
  });
  $( resetTemp ).click(function( event ) {
      thermostat.reset()
      updatelabels()
  });
  $( togglePS ).click(function( event ) {
      thermostat.switchpowersaver()
      updatelabels()
  });

  $( location_select ).change(function( event ){
      scrapeWeather($('#location_select').val())
  });
})

function scrapeWeather (city) {
  $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + ",uk&appid=4a37da1eb33d3c2f08a7597f50018f5d&units=metric", function(data) {
    $('#outside_weather').text(data.main.temp + " °C")
  })
};

function getsavedstate() {
  var x = $.ajax("http://localhost:9292/info", function(data) {
    console.log("hello")
  })
};
