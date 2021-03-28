import React from 'react'
import HeaderSign from '../../components/HeaderSign/HeaderSign'
import * as S from './style'
import Input from '../../components/Form/Input/Input'
import { Link } from 'react-router-dom'


function Login() {
  const [form, setForm] = React.useState({
    email: "",
    senha: ""
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
            <Input label="Senha" type="password"/>
          </form>
          <S.ContainerButtons>
              <S.ButtonSignIn onClick={handleSubmit}>Entrar</S.ButtonSignIn>
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
