
// steroids.view.navigationBar.show("Hello World");

//Parse related keys
var PARSE_APP = "N7zeSdAYWMZRthpwKNis4hjVoLn0PqOOnIL4OEK2";
var PARSE_JS = "VYVtyKd3aqh0UpEtvnW9CFoiWq6E00Qz4fInvi0g";
document.addEventListener("deviceready", function() {
  // Store position watcher id
  Parse.initialize("N7zeSdAYWMZRthpwKNis4hjVoLn0PqOOnIL4OEK2", "VYVtyKd3aqh0UpEtvnW9CFoiWq6E00Qz4fInvi0g");

  NoteObject = Parse.Object.extend("NoteObject");
  var watchId = navigator.geolocation.watchPosition(function(position) {
      // Clear watcher after getting the first value
	  navigator.geolocation.clearWatch(watchId);
      var title = position.coords.latitude;
      var body = position.coords.longitude;
      alert("title=" + title);
      alert("titleghf=" + body);

      var note = new NoteObject();
    	NoteObject.set("latitude",title);
    	NoteObject.set("longitude",body);
    	NoteObject.save();
    function() {},
    // Enable high accuracy readings
    { enableHighAccuracy: true }
  );
});
