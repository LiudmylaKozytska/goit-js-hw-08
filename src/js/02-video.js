import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem(LOCAL_STORAGE_KEY, event.seconds);
  }, 1000)
);

player
  .setCurrentTime(savedTime)
  .then(function (currentTime) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
