import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #66a6ff;
  color: #fff;
`;

const AddButton = styled.button`
  background: #fff;
  color: #66a6ff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #222;
    color: #fff;
  }
`;

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>Addis Music App</div>
      <AddButton onClick={() => navigate('/add')}>Add your music</AddButton>
    </Nav>
  );
};

export default NavBar;