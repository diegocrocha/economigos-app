import React from 'react'
import HeaderSign from '../../components/HeaderSign/HeaderSign'
import * as S from './style'
import * as L from '../Login/style'
import { Link } from 'react-router-dom'
import Input from '../../components/Form/Input/Input'

export default function Cadastro() {
  const [form, setForm] = React.useState({
    email: "",
    senha: "",
    confirmaSenha: ""
  });

  async function handleSubmit(event) {
    event.preventDefault();
    await api.post('economigos/sessao/login', {
        email: form.email,
        senha: form.senha
    }).then(function () {
      localStorage.setItem("autenticado", true)
    }).catch(function (error) {
      setForm("");
      console.log(error);
    })
  }


  return (
    <S.Cadastro>
      <HeaderSign />
      <L.DivAux>
      <L.ContainerSign>
        <S.DivAux2>
          <S.Bloob>
            {/* bloob */}
          </S.Bloob>
        </S.DivAux2>
        <L.FormSign>
          <h4><span style={{color: '#44CE6C'}}>Econo</span>migos</h4>
          <h1>Cadastro</h1>
          <form>
            <Input label="E-mail"/>
            <Input label="Senha" type="password"/>
            <Input label="Confirme a senha" type="password"/>
          </form>
          <L.ContainerButtons>
              <L.ButtonSignUp onClick={handleSubmit}>Cadastre-se</L.ButtonSignUp>
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
