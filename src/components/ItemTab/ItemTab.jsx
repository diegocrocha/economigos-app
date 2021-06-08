import React from 'react'
import CartaoColorido from '../LogosSVGComponentes/CartaoColorido/CartaoColorido'
import * as S from './style'

export default function ItemTab({active, nome, idItemTab, setAtivo, imgItem,...props}) {
    
    function handleSelect() {
        setAtivo(idItemTab)
    }
    
    return (
        <S.ItemTab onClick={handleSelect} {...props} active={active == idItemTab ? true : false}>
            {imgItem ? 
                <img src={imgItem} alt=""/>
                :
                active == idItemTab ? 
                    <CartaoColorido color={"#32A287"}/>
                    :
                    <CartaoColorido color={"#bababa"}/>

            }
            <p>{nome}</p>
        </S.ItemTab>
    )
}
