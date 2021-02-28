import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 300px;
  height: 50px;

  input:focus + label, input:valid + label {
    top: -10px;
    font-size: 11px;
    color: #44CF6C;
  }
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  position: absolute;
  transition: .1s;
  outline: none;
  padding: 0 16px;

  &:focus {
    border: 2px solid #44CF6C;
  }
`

export const Label = styled.label`
  z-index: 10;
  position: absolute;
  top: 12px;
  left: 13px;
  background-color: #fff;
  padding: 5px;
  left: 13px;
  font-size: 15px;
  color: #aaa;
  pointer-events: none;
  transition: .2s;
`
