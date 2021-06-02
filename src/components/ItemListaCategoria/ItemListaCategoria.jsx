import React from 'react'
import * as S from './style'

export default function ItemListaCategoria({nomao, cor}) {
    return (
        <S.ItemListaCategoria color={cor}>
            <div></div>
            <span>{nomao}</span>
        </S.ItemListaCategoria>
    )
}
