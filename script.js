window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Timer

  let deadline = '2023-10-31';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());

    let seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000 * 60 * 60)));

    return {
      'total' : t,
      'seconds' : seconds,
      'minutes' : minutes,
      'hours' : hours
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
      let timeRemaining = getTimeRemaining(endtime);
      hours.textContent = addZero(timeRemaining.hours);
      minutes.textContent = addZero(timeRemaining.minutes);
      seconds.textContent = addZero(timeRemaining.seconds);

      function addZero(num) {
        if (num < 10) {
          return '0' + num;
        } else return num;
      }

      if (timeRemaining.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        }
    }
  }

  setClock('timer', deadline);
  
})
