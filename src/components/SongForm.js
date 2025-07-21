import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { addSong } from '../redux/songsSlice.js';

const FormCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(102, 166, 255, 0.10);
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 420px;
  margin: 2rem auto;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #222;
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const Input = styled.input`
  padding: 0.9rem 1.1rem;
  border: 1.5px solid #e3e8ee;
  border-radius: 10px;
  font-size: 1.05rem;
  background: #f7faff;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border: 1.5px solid #66a6ff;
    outline: none;
    box-shadow: 0 2px 8px rgba(102, 166, 255, 0.10);
    background: #fff;
  }
`;

const Button = styled.button`
  padding: 0.9rem 0;
  background: linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(102, 166, 255, 0.10);
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%);
    transform: translateY(-2px) scale(1.04);
  }
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
    <FormCard>
      <FormTitle>Add a New Song</FormTitle>
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
    </FormCard>
  );
};

export default SongForm;