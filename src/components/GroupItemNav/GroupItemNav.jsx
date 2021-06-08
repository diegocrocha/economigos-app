import React from 'react'
import CartoesFundoRedondo from '../LogosSVGComponentes/CartoesFundoRedondo/CartoesFundoRedondo'
import ContasFundoRedondo from '../LogosSVGComponentes/ContasFundoRedondo/ContasFundoRedondo'
import GraficosFundoRedondo from '../LogosSVGComponentes/GraficosFundoRedondo/GraficosFundoRedondo'
import MetasFundoRedondo from '../LogosSVGComponentes/MetasFundoRedondo/MetasFundoRedondo'
import Sair from '../LogosSVGComponentes/Sair/Sair'
import { ItemNav } from '../NavBarApp/style'
import * as S from './style'

export default function GroupItemNav({type, active}) {

  function Icon() {
    switch (type) {
      case "Painel":
        return <GraficosFundoRedondo active={active} />
      case "Contas":
        return <ContasFundoRedondo active={active} />
      case "Cartões":
        return <CartoesFundoRedondo active={active} />
      case "Metas":
        return <MetasFundoRedondo active={active} />
      case "Sair":
        return <Sair active={active}/>
    }
  }

  return (
    <S.Wrapper>
        {Icon()}
        <ItemNav className="itemNav" active={active}>
          {type}
        </ItemNav>
    </S.Wrapper>
  )
}
