import React from 'react'
import * as S from "./style";
import * as G from "../../styles/globalComponents";

export default function ModalMetas({titulo, edicao}) {
    return (
        <S.MetasWrapper>
            <S.ModalMetas>
                <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
                <p>{titulo}</p>

                <G.Button color="#32A287">Adicionar meta</G.Button>
            </S.ModalMetas>
        </S.MetasWrapper>
    )
}
