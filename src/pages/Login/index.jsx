import React from 'react'
import HeaderSign from '../../components/HeaderSign/HeaderSign'
import * as S from './style'
import Input from '../../components/Form/Input/Input'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <S.Login>
      <HeaderSign />
      <S.DivAux>
      <S.ContainerSign>
        <S.Bloob>
          {/* bloob */}
        </S.Bloob>
        <S.FormSign>
          <h4><span style={{color: '#44CE6C'}}>Econo</span>migos</h4>
          <h1>Login</h1>
          <form>
            <Input label="E-mail"/>
            <Input label="Senha" />
          </form>
          <S.ContainerButtons>
              <S.ButtonSignIn>Entrar</S.ButtonSignIn>
              <Link to="/cadastro">
                <S.ButtonSignUp>Cadastre-se</S.ButtonSignUp>
              </Link>
          </S.ContainerButtons>
        </S.FormSign>
      </S.ContainerSign>
      </S.DivAux>
    </S.Login>
  )
}

export default Login;
