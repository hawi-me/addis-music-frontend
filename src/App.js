import React, { useState } from 'react';
import styled from '@emotion/styled';
import SongList from './components/SongList.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SongForm from './components/SongForm.js';

const Background = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
`;

const Card = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(102, 166, 255, 0.15);
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;

const Icon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.2rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #222;
  margin-bottom: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%);
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(102, 166, 255, 0.15);
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%);
    transform: translateY(-2px) scale(1.04);
  }
`;

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Card>
        <Icon>🎵</Icon>
        <Title>Addis Music App</Title>
        <Subtitle>
          Welcome! This is your modern music manager. Start building your playlist and enjoy a beautiful UI experience.
        </Subtitle>
        <Button onClick={() => navigate('/songs')}>Get Started</Button>
      </Card>
    </Background>
  );
};
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/songs" element={<SongList />} />
      <Route path="/add" element={<SongForm/>} />
    </Routes>
  );
};

export default App;
