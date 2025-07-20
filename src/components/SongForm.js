import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { addSong } from '../redux/songsSlice';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const SongForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    year: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSong(formData));
    setFormData({ title: '', artist: '', album: '', year: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <Input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
        placeholder="Artist"
        required
      />
      <Input
        type="text"
        name="album"
        value={formData.album}
        onChange={handleChange}
        placeholder="Album"
      />
      <Input
        type="number"
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
      />
      <Button type="submit">Add Song</Button>
    </Form>
  );
};

export default SongForm;