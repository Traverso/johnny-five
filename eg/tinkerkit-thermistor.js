var five = require("../lib/johnny-five.js");

new five.Board().on("ready", function() {
  new five.Temperature({controller: "TINKERKIT", pin: "I0"}).on("change", function() {
    console.log("F: ", this.fahrenheit);
    console.log("C: ", this.celsius);
  });
});

// @markdown
// - [TinkerKit Thermistor](http://www.tinkerkit.com/thermistor/)
// - [TinkerKit Shield](http://www.tinkerkit.com/shield/)
// @markdown
