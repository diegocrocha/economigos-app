import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  margin: 0.4rem 0 0 0;
  margin-bottom: ${props => props.erro != null ? 0 : "1.2rem"};

  input:focus + label, input:valid + label {
    top: -10px;
    left: 0px;
    font-size: 14px;
    color: ${props => props.erro != null ? "#A23232" : (props.primary ? "#44CF6C" : "#312F2F")};
    font-weight: bold;
  }

`;

export const Error = styled.p`
  margin: 0;
  padding: 0;
  color: #A23232;
  text-align: left;
  font-weight: 600;
  padding-top: 1px;
  font-size: 10px;
`

export const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${props => props.erro != null ? "#A23232" : "#bbbbbb"};
  width: 100%;
  height: 45px;
  position: absolute;
  font-size: 14px;
  transition: .1s;
  outline: none;
  padding: 0px 5px;
  padding-top: 10px;

  &:focus {
    border-bottom: 2px solid ${props => props.erro != null ? "#A23232" : (props.primary ? "#44CF6C" : "#312F2F")};
  }
`

export const Label = styled.label`
  z-index: 10;
  position: absolute;
  top: 12px;
  background-color: transparent;
  padding: 5px;
  padding-bottom: 5px;
  left: 0px;
  font-size: 15px;
  color: #aaa;
  pointer-events: none;
  transition: .2s;
`
