import React from 'react'
import HeaderSign from '../../components/HeaderSign/HeaderSign'
import * as S from './style'
import * as L from '../Login/style'
import { Link } from 'react-router-dom'
import Input from '../../components/Form/Input/Input'

export default function Cadastro() {

  

  return (
    <S.Cadastro>
      <HeaderSign />
      <L.DivAux>
      <L.ContainerSign>
        <L.Bloob>
          {/* bloob */}
        </L.Bloob>
        <L.FormSign>
          <h4><span style={{color: '#44CE6C'}}>Econo</span>migos</h4>
          <h1>Cadastro</h1>
          <form>
            <Input label="E-mail"/>
            <Input label="Senha" />
            <Input label="Confirme a senha" />
          </form>
          <L.ContainerButtons>
              <L.ButtonSignUp>Cadastre-se</L.ButtonSignUp>
              <Link to="/login">
                <L.ButtonSignIn>Login</L.ButtonSignIn>
              </Link>
          </L.ContainerButtons>
        </L.FormSign>
      </L.ContainerSign>
      </L.DivAux>
    </S.Cadastro>
  )
}
