import React from 'react'
import ContaC6 from '../../assets/tmp/conta-c6.svg'
import * as S from './style'

export default function ItemTab({active, nome, idItemTab, setAtivo, ...props}) {
    
    function handleSelect() {
        setAtivo(idItemTab)
    }
    
    return (
        <S.ItemTab onClick={handleSelect} {...props} active={active == idItemTab ? true : false}>
            <img src={ContaC6} alt=""/>
            <p>{nome}</p>
        </S.ItemTab>
    )
}
