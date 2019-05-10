import styled from 'styled-components';

import wheeler from './kenwheeler-normal.png';

const Face = styled.button`
  appearance: none;
  border: 0;
  width: 170px;
  height: 200px;
  background-color: rebeccapurple;
  transition: transform 150ms;
  cursor: pointer;
  background: url(${wheeler}) center center no-repeat;
  background-size: cover;

  &:hover {
    transform: scale(1.1) rotate(-5deg);
  }

  &:focus {
    outline: none;
  }
`;

export default Face;
