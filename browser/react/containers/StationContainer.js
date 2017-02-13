import { connect } from 'react-redux';
import Station from '../components/Station'
import {convertSong} from '../utils'

const mapStateToProps = function (state, ownProps) {
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
};

function mapDispatchToProps (dispatch, ownProps) {
	return {

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);
