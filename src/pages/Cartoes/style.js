import styled from "styled-components";

export const CartoesWrapper = styled.div`
    height: 100%;
    width: 100%;
`

export const InfoCartao = styled.div`
    margin-top: -5px;
    height: 19%;
    width: 100%;
    background-color: #E4E4E4;
    border: 3px solid #E4E4E4;
    border-bottom: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    p{
      width: 100%;
      font-weight: 600;
    }

    div{
      width: 100%;
      font-weight: 700;
      font-size: 0.75rem;

      span{
        font-size: 1.45rem;
      }
    }
`

export const DetalhesCartao = styled.div`
    width: 100%;
    height: 4.3rem;
    border: 3px solid #E4E4E4;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
`