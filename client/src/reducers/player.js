import * as actions from '../actions/player';


const initialState = {
  isPlaying: false,
  isLooping: false,
  volume: 1,
  isMuted: false,
  currentSong: null,
  currentPlaylist: [],
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.PLAYER_PLAY_PAUSE:
      return { ...state, isPlaying: !state.isPlaying };
    case actions.PLAYER_TOGGLE_LOOP:
      return { ...state, isLooping: !state.isLooping };
    case actions.PLAYER_SET_VOLUME:
      return { ...state, volume: action.volume };
    case actions.PLAYER_TOGGLE_MUTE:
      return { ...state, isMuted: !state.isMuted };
    case actions.PLAYER_SET_SONG:
      return { ...state, currentSong: action.song };
    case actions.PLAYER_SET_PLAYLIST:
      return { ...state, currentPlaylist: action.playlist };
    default: return state;
  }
};
