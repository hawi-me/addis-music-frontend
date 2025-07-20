import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { deleteSong } from '../redux/songsSlice';

const SongItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const status = useSelector((state) => state.songs.status);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading songs</div>;

  return (
    <div>
      {songs.map((song) => (
        <SongItem key={song.id}>
          <div>
            <h3>{song.title}</h3>
            <p>{song.artist} - {song.album} ({song.year})</p>
          </div>
          <div>
            <button onClick={() => handleDelete(song.id)}>Delete</button>
          </div>
        </SongItem>
      ))}
    </div>
  );
};

export default SongList;