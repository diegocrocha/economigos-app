import React from 'react'
import HeaderApp from '../../components/HeaderApp/HeaderApp';
import NavBarApp from '../../components/NavBarApp/NavBarApp';
import * as S from './style'

function Painel() {
  return (
    <section className="app-config">
      {/* <NavBarApp /> */}
      <HeaderApp/>
      <div className="container-app">
        <S.DivA>
          
        </S.DivA>
      </div>
    </section>
  )
}


export default Painel;