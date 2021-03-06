import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px white dotted;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  grid-column: 1/-1;
  margin-top: 35px;
  text-align: left;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 2;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Text>
        This is heavily inspired by the amazing{' '}
        <a href="http://www.therapboard.com/">The Rap Board</a> from{' '}
        <a href="https://lpriel.com/">LP Riel</a>
        <br />
        Made by <a href="https://www.huguestennier.com">Hugues Tennier</a>
      </Text>
      <Text>
        <a href="https://github.com/huguestennier/ken-wheeler-board">GitHub</a>
      </Text>
    </StyledFooter>
  );
};

export default Footer;
