import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
// import { fetchSongs } from '../redux/songsSlice';
import { fetchSongs } from '../redux/songsSlice.js';

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
`;

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.songs.currentPage);
  const totalPages = useSelector((state) => state.songs.totalPages);

  const handlePageChange = (page) => {
    dispatch(fetchSongs({ page, limit: 10 }));
  };

  return (
    <div>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span>Page {currentPage} of {totalPages}</span>
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;