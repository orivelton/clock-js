(function() {
  "use strict";
  var secondsSelector = document.querySelector('.seconds');
  var minutesSelector = document.querySelector('.minutes');
  var hoursSelector = document.querySelector('.hours');

  function getDate () {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    toConvert(seconds, 60, secondsSelector);
    toConvert(minutes, 60, minutesSelector);
    toConvert(hours, 12, hoursSelector);

    document.querySelector('.digital-seconds').innerHTML = seconds;
    document.querySelector('.digital-minutes').innerHTML = minutes;
    document.querySelector('.digital-hours').innerHTML = hours;
  }

  function toConvert(value, divider, selector) {
    var convertResult =  (( value / divider) * 360) + 90;
    selector.style.transform = `rotate(${convertResult}deg)`;
  }

  setInterval(getDate, 1000);

}());
