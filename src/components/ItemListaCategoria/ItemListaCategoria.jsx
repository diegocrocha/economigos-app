import React from 'react'
import * as S from './styled'

export default function ItemListaCategoria({nome, cor}) {
    return (
        <S.ItemListaCategoria color={cor}>
            <div></div>
            <span>{nome}</span>
        </S.ItemListaCategoria>
    )
}
