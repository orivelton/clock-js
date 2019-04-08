(function() {
  "use strict";
  const secondsSelector = document.querySelector('.seconds');
  const minutesSelector = document.querySelector('.minutes');
  const hoursSelector = document.querySelector('.hours');

  function getDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    toConvert(seconds, 60, secondsSelector);
    toConvert(minutes, 60, minutesSelector);
    toConvert(hours, 12, hoursSelector);

    document.querySelector('.digital-seconds').innerHTML = seconds;
    document.querySelector('.digital-minutes').innerHTML = minutes;
    document.querySelector('.digital-hours').innerHTML = hours;
  }

  function toConvert(value, divider, selector) {
    const convertResult =  (( value / divider) * 360) + 90;
    selector.style.transform = `rotate(${convertResult}deg)`;
  }

  setInterval(getDate, 1000);

}());
