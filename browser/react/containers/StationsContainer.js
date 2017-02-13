import { connect } from 'react-redux';
import Stations from '../components/Stations'

function convertSongsToStations (songsArray) {
 const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
}

function mapStateToProps (state) {
	 // console.log(state);
	 return {
    stations: convertSongsToStations(state.songs),
  };
}

function mapDispatchToProps (dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
