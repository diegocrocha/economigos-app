import styled from 'styled-components';

export const ButtonS = styled.button`
  background-color: transparent;
  color: #44CF6C;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  padding: .35rem 1.2rem;
  border-radius: 20px;
  border: #44CF6C solid 3.5px;
  font-size: 1.3rem;
  min-width: 7rem;
  cursor: pointer;
  box-shadow: black 2px 2px 4px;
  outline: none;
  transition: 0.1s;

  &:hover {
    transform: scale(1.03);
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;