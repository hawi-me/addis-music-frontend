import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  deleteSongSuccess,
} from './songsSlice.js';

const API_BASE_URL = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

function* fetchSongsSaga(action) {
  try {
    yield put(fetchSongsStart());
    const { page, limit } = action.payload;
    const response = yield call(
      axios.get,
      `${API_BASE_URL}/posts?_page=${page}&_limit=${limit}`
    );
    // Mock song data
    const songs = response.data.map((post, index) => ({
      id: post.id,
      title: `Song ${post.id}`,
      artist: `Artist ${index + 1}`,
      album: `Album ${index + 1}`,
      year: 2000 + (index % 20),
    }));
    yield put(fetchSongsSuccess({
      songs,
      page,
      totalPages: Math.ceil(response.headers['x-total-count'] / limit),
    }));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSongSaga(action) {
  try {
    const response = yield call(axios.post, `${API_BASE_URL}/posts`, action.payload);
    yield put(addSongSuccess({
      ...action.payload,
      id: response.data.id,
    }));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* deleteSongSaga(action) {
  try {
    yield call(axios.delete, `${API_BASE_URL}/posts/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export function* watchSongs() {
  yield takeEvery('songs/fetchSongs', fetchSongsSaga);
  yield takeEvery('songs/addSong', addSongSaga);
  yield takeEvery('songs/deleteSong', deleteSongSaga);
}