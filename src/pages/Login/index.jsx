import React from 'react'
import HeaderSign from '../../components/HeaderSign/HeaderSign'
import * as S from './style'
import Input from '../../components/Form/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import useForm from '../../hooks/useForm'
import Tooltip from '../../components/Helper/Tooltip/Tooltip'


function Login() {
  const navigate = useNavigate();
  const email = useForm()
  const password = useForm();

  const {userLogin, erro, loading, login} = React.useContext(UserContext);

  if (login) {
    return navigate('/app/painel');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }


  return (
    <S.Login>
      <HeaderSign />
      <S.DivAux>
      <S.ContainerSign>
        <S.Bloob>
          {/* bloob */}
        </S.Bloob>
        <S.FormSign className="animeLeft">
          <h4><span style={{color: '#44CE6C'}}>Econo</span>migos</h4>
          <h1>Login</h1>
          <form>
            <Input 
            id="email"
            label="E-mail"
            {... email}
            required/>
            <Input
            id="senha"
            label="Senha"
            {... password}
            type="password" 
            required/>
            <S.ContainerButtons>
            {!loading ? ( 
              <S.ButtonSignIn onClick={handleSubmit}>Entrar</S.ButtonSignIn> 
              ) : (
                <S.ButtonSignIn disabled>Carregando...</S.ButtonSignIn>
              )}
            
              <Link to="/cadastro">
                <S.ButtonSignUp>Cadastre-se</S.ButtonSignUp>
              </Link>
          </S.ContainerButtons>
          </form>
        </S.FormSign>
      </S.ContainerSign>
      </S.DivAux>
    </S.Login>
  )
}

export default Login;
