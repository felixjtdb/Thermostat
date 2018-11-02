$( document ).ready(function() {
  thermostat = new Thermostat(getsavedstate())
  updatelabels()
  scrapeWeather($('#location_select').val())

  function updatelabels() {
    $('#temperature').text(thermostat.temp + " °C")
    $('#temperature').attr('class', thermostat.energyusage())
    $('#PS').text(thermostat.powersaver)
    $('#usage').text(thermostat.energyusage())
    savestate()
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
    $('#outside_weather').text(Math.round(data.main.temp) + " °C")
  })
};

function getsavedstate() {
  $.get("http://localhost:4567/info", function(data) {
    return(JSON.parse(data))
  })
};

function savestate() {

  $.ajax({
  type: "POST",
  url: "http://localhost:4567/info",
  data: data,
  success: success,
  dataType: dataType
});
  $.post("http://localhost:4567/info",  {temp: thermostat.temp, city: thermostat.city, ps: thermostat.powersaver}
  )
};
