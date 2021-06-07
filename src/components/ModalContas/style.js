import styled from 'styled-components';


export const MetasWrapper = styled.div`
  background: transparent;
  position: absolute;
  padding-top: 10%;
  border-radius: 10px;
  width: 100%;
  z-index: 1000!important;
  height: 100%;
`

export const ModalMetas = styled.div`
  width: 50%;
  height: 80%;
  text-align: center;
  border-radius: 8px;
  margin-left: 25%;
  padding: 10px 10px;
  margin-bottom: 10%;
  opacity: 0;
  overflow: hidden;
  transform: scale(.7);
  animation: scaleUp .3s forwards;
  background-color: white;
  border: #32A287 2px solid;
  justify-items: center;

  img {
    width: 80%;
    margin-bottom: 30px;
    margin-left: 10%;
  }

  p {
    margin-top: 10px;
  }

  button {
    width: 80%;
    margin-left: 10%;
    text-align: center;
    margin-top: 30px;
  }

  @keyframes scaleUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`
