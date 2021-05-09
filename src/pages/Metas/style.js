import styled from 'styled-components';

export const NavMetas = styled.div`
    height: 15%;
    width: 80%;
    border: 3px solid #E4E4E4;
    border-radius: 14px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
`;

export const AdicionarMeta = styled.div`
    height: 15%;
    width: 20%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    img{
        height: 60%;

        &:hover{
            cursor: pointer;
            filter: drop-shadow(0px 1px 2px grey);
        }
    }
`;

export const Cards = styled.div`
    margin-top: 3%;
    height: 82%;
    display: flex;
    grid-gap: 3px;
    overflow-x: hidden;
    flex-wrap: wrap;

    &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #C4C4C4;
    border-radius: 14px;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #32A287;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #32A287;  /* creates padding around scroll thumb */
  }
`;