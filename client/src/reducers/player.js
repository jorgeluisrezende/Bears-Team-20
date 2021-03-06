/* eslint-disable  no-underscore-dangle */
import * as actions from '../actions/player';
import * as userActions from '../actions/user';

const initialState = {
  isReady: false,
  isPlaying: false,
  isLooping: false,
  volume: 1,
  isMuted: false,
  currentSong: {},
  currentPlaylist: {
    _id: '1',
    name: '',
    public: false,
    songs: [],
  },
  plShowing: false,
  duration: 0,
  progress: 0,
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.PLAYER_READY:
      return { ...state, isReady: action.isReady };
    case actions.PLAYER_PLAY_PAUSE:
      if (Object.keys(state.currentSong).length) {
        return { ...state, isPlaying: !state.isPlaying };
      }

      return { ...state };

    case actions.PLAYER_PLAY:
      return { ...state, isPlaying: true };
    case actions.PLAYER_PAUSE:
      return { ...state, isPlaying: false };
    case actions.PLAYER_TOGGLE_LOOP:
      return { ...state, isLooping: !state.isLooping };
    case actions.PLAYER_SET_VOLUME:
      return { ...state, volume: action.volume };
    case actions.PLAYER_TOGGLE_MUTE:
      return { ...state, isMuted: !state.isMuted };
    case actions.PLAYER_SET_SONG:
      return { ...state, currentSong: action.song };
    case actions.PLAYER_PLAY_SONG:
      return { ...state, currentSong: action.song, isPlaying: true };
    case actions.PLAYER_SET_PLAYLIST:
      return { ...state, currentPlaylist: action.playlist };
    case actions.PLAYER_SET_DURATION:
      return { ...state, duration: action.duration };
    case actions.PLAYER_SET_PROGRESS:
      return { ...state, progress: action.progress };
    case actions.PLAYER_SET_PLAYLIST_SHOW:
      return { ...state, plShowing: action.plShowing };
    case userActions.ADD_TRACK_LOCALLY:
      if (action.playlistId !== state.currentPlaylist._id) {
        return state;
      }
      if (state.currentPlaylist.songs.find(s => s.title === action.track.title)) {
        return state;
      }
      return {
        ...state,
        currentPlaylist: {
          ...state.currentPlaylist,
          songs: [
            ...state.currentPlaylist.songs,
            { ...action.track },
          ],
        },
      };
    default: return state;
  }
};
