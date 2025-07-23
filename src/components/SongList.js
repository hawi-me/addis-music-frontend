import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import NavBar from './NavBar.js';
import { fetchSongs, deleteSong, updateSong } from '../redux/songsSlice.js';

const ListBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  padding-top: 0;
`;

const ListContainer = styled.div`
  margin: 2.5rem auto 1.5rem auto;
  max-width: 1100px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(102, 166, 255, 0.13);
  padding: 2.5rem 2rem 2rem 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const SongCard = styled.div`
  background: linear-gradient(120deg, #f3f8ff 0%, #e0c3fc 100%);
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(102, 166, 255, 0.10);
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s;
  position: relative;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px rgba(102, 166, 255, 0.18);
  }
`;

const MusicIcon = styled.div`
  font-size: 2.7rem;
  margin-bottom: 1rem;
  color: #66a6ff;
`;

const SongTitle = styled.h3`
  margin: 0 0 0.3rem 0;
  font-size: 1.18rem;
  color: #222;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
`;

const SongMeta = styled.p`
  margin: 0 0 1.2rem 0;
  color: #666;
  font-size: 1.02rem;
  text-align: center;
`;

const DeleteButton = styled.button`
  background: linear-gradient(90deg, #ff5858 0%, #f09819 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1.3rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 88, 88, 0.10);
  transition: background 0.2s, transform 0.2s;
  margin-top: auto;
  &:hover {
    background: linear-gradient(90deg, #f09819 0%, #ff5858 100%);
    transform: translateY(-2px) scale(1.06);
  }
`;

const EmptyState = styled.p`
  text-align: center;
  color: #aaa;
  margin: 2.5rem 0;
  font-size: 1.15rem;
  letter-spacing: 0.5px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1.2rem;
`;

const PageButton = styled.button`
  background: linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.3rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(102, 166, 255, 0.10);
  transition: background 0.2s, transform 0.2s;
  &:disabled {
    background: #e3e8ee;
    color: #aaa;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%);
    transform: translateY(-2px) scale(1.04);
  }
`;

// Add/Edit form styles
const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  margin-top: 0.5rem;
`;
const EditInput = styled.input`
  padding: 0.7rem 1rem;
  border: 1.5px solid #e3e8ee;
  border-radius: 8px;
  font-size: 1rem;
  background: #f7faff;
  width: 100%;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border: 1.5px solid #66a6ff;
    outline: none;
    box-shadow: 0 2px 8px rgba(102, 166, 255, 0.10);
    background: #fff;
  }
`;
const EditButtonRow = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.5rem;
`;
const EditButton = styled.button`
  background: linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(102, 166, 255, 0.10);
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%);
    transform: translateY(-2px) scale(1.04);
  }
`;
const CancelButton = styled(EditButton)`
  background: #e3e8ee;
  color: #666;
  &:hover {
    background: #d1d8e6;
    color: #222;
  }
`;

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const status = useSelector((state) => state.songs.status);
  const [page, setPage] = useState(1);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ title: '', artist: '', album: '', year: '' });
  const limit = 10;

  useEffect(() => {
    dispatch(fetchSongs({ page, limit }));
  }, [dispatch, page]);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  const handleEdit = (song) => {
    setEditId(song.id);
    setEditData({
      title: song.title,
      artist: song.artist,
      album: song.album,
      year: song.year,
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSong({ id: editId, ...editData }));
    setEditId(null);
    setEditData({ title: '', artist: '', album: '', year: '' });
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditData({ title: '', artist: '', album: '', year: '' });
  };

  if (status === 'loading') return <ListBackground><ListContainer>Loading...</ListContainer></ListBackground>;
  if (status === 'failed') return <ListBackground><ListContainer>Error loading songs</ListContainer></ListBackground>;

  return (
    <ListBackground>
      <NavBar />
      <ListContainer>
        {songs.length === 0 ? (
          <EmptyState>No songs found. Add your first music! 🎶</EmptyState>
        ) : (
          <CardGrid>
            {songs.map((song) => (
              <SongCard key={song.id}>
                <MusicIcon>🎵</MusicIcon>
                {editId === song.id ? (
                  <EditForm onSubmit={handleEditSubmit}>
                    <EditInput
                      type="text"
                      name="title"
                      value={editData.title}
                      onChange={handleEditChange}
                      placeholder="Title"
                      required
                    />
                    <EditInput
                      type="text"
                      name="artist"
                      value={editData.artist}
                      onChange={handleEditChange}
                      placeholder="Artist"
                      required
                    />
                    <EditInput
                      type="text"
                      name="album"
                      value={editData.album}
                      onChange={handleEditChange}
                      placeholder="Album"
                    />
                    <EditInput
                      type="number"
                      name="year"
                      value={editData.year}
                      onChange={handleEditChange}
                      placeholder="Year"
                    />
                    <EditButtonRow>
                      <EditButton type="submit">Save</EditButton>
                      <CancelButton type="button" onClick={handleCancelEdit}>Cancel</CancelButton>
                    </EditButtonRow>
                  </EditForm>
                ) : (
                  <>
                    <SongTitle>{song.title}</SongTitle>
                    <SongMeta>{song.artist} - {song.album} ({song.year})</SongMeta>
                    <div style={{ display: 'flex', gap: '0.7rem', marginTop: 'auto' }}>
                      <EditButton type="button" onClick={() => handleEdit(song)}>Edit</EditButton>
                      <DeleteButton onClick={() => handleDelete(song.id)}>Delete</DeleteButton>
                    </div>
                  </>
                )}
              </SongCard>
            ))}
          </CardGrid>
        )}
      </ListContainer>
      <Pagination>
        <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</PageButton>
        <span style={{ color: '#222', fontWeight: 600, fontSize: '1.08rem' }}>Page {page}</span>
        <PageButton onClick={() => setPage(page + 1)}>Next</PageButton>
      </Pagination>
    </ListBackground>
  );
};

export default SongList;