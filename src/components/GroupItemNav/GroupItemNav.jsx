import React from 'react'
import CartoesFundoRedondo from '../LogosSVGComponentes/CartoesFundoRedondo/CartoesFundoRedondo'
import ContasFundoRedondo from '../LogosSVGComponentes/ContasFundoRedondo/ContasFundoRedondo'
import GraficosFundoRedondo from '../LogosSVGComponentes/GraficosFundoRedondo/GraficosFundoRedondo'
import MetasFundoRedondo from '../LogosSVGComponentes/MetasFundoRedondo/MetasFundoRedondo'
import Sair from '../LogosSVGComponentes/Sair/Sair'
import { ItemNav } from '../NavBarApp/style'
import * as S from './style'

export default function GroupItemNav({type, active}) {
  const [activeA, setActiveA] = React.useState(active)

  function Icon() {
    switch (type) {
      case "Painel":
        return <GraficosFundoRedondo active={activeA} />
      case "Contas":
        return <ContasFundoRedondo active={activeA} />
      case "Cartões":
        return <CartoesFundoRedondo active={activeA} />
      case "Metas":
        return <MetasFundoRedondo active={activeA} />
      case "Sair":
        return <Sair active={activeA}/>
    }
  }
  function handleHover() {
      setActiveA(true)
  }

  function handleUp() {
    if (!active) {
      setActiveA(false)
    }
  }

  return (
    <S.Wrapper onMouseOver={handleHover} onMouseOut={handleUp}>
        {Icon()}
        <ItemNav active={activeA}>
          {type}
        </ItemNav>
    </S.Wrapper>
  )
}
