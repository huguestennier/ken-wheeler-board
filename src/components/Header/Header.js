import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-column: 1/-1;
  margin-bottom: 35px;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: white;
  text-align: center;
  margin: 0;
  padding: 3rem 0 0 0;
  line-height: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>The Ken Wheeler Board</Title>
    </StyledHeader>
  );
};

export default Header;
