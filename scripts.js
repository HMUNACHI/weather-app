navigator.geolocation.getCurrentPosition(function(position) {
  var longitude = position.coords.longitude;
  var latitude = position.coords.latitude;
  $.getJSON(
    "https://fcc-weather-api.glitch.me/api/current?lat=" +
      latitude +
      "&" +
      "lon=" +
      longitude,
    function(json) {
      var myObj = JSON.stringify(json);
      document.getElementById("area").innerHTML = json.name + ", ";
      document.getElementById("country").innerHTML = json.sys.country;
      document.getElementById("temp").innerHTML = json.main.temp + "0&#8451";
      document.getElementById("icon").src = json.weather[0].icon;
      var temp = json.main.temp;
      var tempC = temp;
      var tempF = tempC * 1.8 + 32;
      $("#button").click(function() {
        if (temp == tempC) {
          document.getElementById("temp").innerHTML = tempF + "&#8457";
          temp = tempF;
        }
        else{
          document.getElementById("temp").innerHTML = tempC + "0&#8451";
          temp = tempC;
        }
      });
    }
  );
});
