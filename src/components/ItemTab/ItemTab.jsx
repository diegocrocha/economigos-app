import React from 'react'
import ContaC6 from '../../assets/tmp/conta-c6.svg'
import * as S from './style'

export default function ItemTab({active, nome, ...props}) {
    return (
        <S.ItemTab {...props} active={active}>
            <img src={ContaC6} alt=""/>
            <p>{nome}</p>
        </S.ItemTab>
    )
}
