import styled from 'styled-components';

export const TabLayout = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  overflow: hidden;
  
`;

export const GroupMenu = styled.div`
    z-index: 1;
    width: 100%;
    height: 27%;
    display: flex;
    align-items: center;   
    border: 3px solid #E4E4E4;
    border-bottom: none;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px; 

`;

export const ImgBtnAdicionar = styled.img`
    height: 35px;
    width: 20%;
    &:hover{
      cursor: pointer;
      filter: drop-shadow(0px 0px 2px grey);
    }
`;

export const ImgBtnProximo = styled.img`
    height: 30px;
    position: relative;
    left: 2%;

    &:hover{
      cursor: pointer;
      filter: drop-shadow(1px 0px 3px grey);
    }
`;

export const InfoItemSelected = styled.div`
    margin-top: -5px;
    height: 23%;
    width: 100%;
    background-color: #E4E4E4;
    border: 3px solid #E4E4E4;
    border-bottom: none;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const GroupInfosContaCartao = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;

    p{
      width: 100%;
      font-weight: 600;
    }

    div{
      width: 100%;
      font-weight: 700;
      font-size: 0.9rem;

      span{
        font-size: 1.9rem;
      }
    }
`