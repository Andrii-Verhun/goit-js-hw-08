import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
    id: 236203659,
});

player.on('timeupdate', throttle((data) => {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
    }, 1000));

try {
  player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')));
} catch (error) {
  console.log('Parsing error!');
};

