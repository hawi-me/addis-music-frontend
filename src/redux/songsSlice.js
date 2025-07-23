import { createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    fetchSongsStart(state) {
      state.status = 'loading';
    },
    fetchSongsSuccess(state, action) {
      state.status = 'succeeded';
      state.songs = action.payload.songs;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.totalPages;
    },
    fetchSongsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    addSongSuccess(state, action) {
      state.songs.push(action.payload);
    },
    deleteSongSuccess(state, action) {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
    updateSongSuccess(state, action) {
      const { id, title, artist, album, year } = action.payload;
      const song = state.songs.find((s) => s.id === id);
      if (song) {
        song.title = title;
        song.artist = artist;
        song.album = album;
        song.year = year;
      }
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  deleteSongSuccess,
  updateSongSuccess,
} = songsSlice.actions;

export const fetchSongs = ({ page, limit }) => ({
  type: 'songs/fetchSongs',
  payload: { page, limit },
});

export const addSong = (song) => ({
  type: 'songs/addSong',
  payload: song,
});

export const deleteSong = (id) => ({
  type: 'songs/deleteSong',
  payload: id,
});

export const updateSong = (song) => ({
  type: 'songs/updateSong',
  payload: song,
});

export default songsSlice.reducer;