import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import laskarpelangi from '../assets/yt1s.com - Laskar Pelangi TRUST Trinity Youth Symphony Orchestra.mp3';

function Music() {
  return (
    <audio autoPlay loop>
      <source src={laskarpelangi}></source>
    </audio>
  )
}

export default Music;
