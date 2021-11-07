import React from 'react'
import HeaderSign from '../../components/HeaderSign/HeaderSign'
import * as S from './style'
import * as L from '../Login/style'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Form/Input/Input'
import api from '../../services/api'
import { UserContext } from '../../hooks/UserContext'
import useForm from '../../hooks/useForm'
import { toast } from 'react-toastify';
import Head from '../../components/Helper/Head'

export default function Cadastro() {
  const navigate = useNavigate();
  const email = useForm("email")
  const senha = useForm("senha")
  const confirmar = useForm("senha")

  const {dados, userLogin, loading, login} = React.useContext(UserContext);

  if (login) {
    navigate('../app/painel', { replace: true })
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (senha.value == confirmar.value) {
      if (senha.validate() && email.validate()) {
        await api.post('economigos/usuarios', {
          email: email.value,
          senha: senha.value,
          nome: "Economigo"
      }).then(function () {
        userLogin(email.value, senha.value)
      }).catch(function () {
        toast.error("Erro ao cadastrar usuário")
      })
      }
    } else {
      toast.error("As senhas devem ser iguais")
    }
  }


  return (
    <S.Cadastro>
      <Head title="Cadastro"/>
      <HeaderSign />
      <L.DivAux>
      <L.ContainerSign>
        <S.DivAux2>
          <S.Bloob>
            {/* bloob */}
          </S.Bloob>
        </S.DivAux2>
        <L.FormSign className="animeLeft">
          <h4><span style={{color: '#44CE6C'}}>Econo</span>migos</h4>
          <h1>Cadastro</h1>
          <form>
            <Input
              primary={true}
              id="email"
              label="E-mail"
              {...email}
              required/>
            <Input
              primary={true}
              id="senha"
              label="Senha"
              type="password"
              {...senha}
              required/>
            <Input
              primary={true}
              id="confirmaSenha"
              label="Confirme a senha"
              type="password"
              {...confirmar}
              required/>
          </form>
          <L.ContainerButtons>
          {!loading ? (
              <L.ButtonSignUp onClick={handleSubmit}>Cadastre-se</L.ButtonSignUp>
              ) : (
                <L.ButtonSignUp disabled>Carregando...</L.ButtonSignUp>
              )}
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
