import React from 'react'
import HeaderSign from '../../components/HeaderSign/HeaderSign'
import * as S from './style'
import Input from '../../components/Form/Input/Input'
import { Link, Redirect } from 'react-router-dom'
import api from '../../services/api'
import { UserContext } from '../../UserContext'


function Login() {
  const [form, setForm] = React.useState({
    email: "",
    senha: ""
  });

  const {userLogin} = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    userLogin(form.email, form.senha);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
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
            onChange={handleChange}
            value={form.email}
            id="email"
            label="E-mail"
            required/>
            <Input
            onChange={handleChange}
            value={form.senha}
            id="senha"
            label="Senha"
            type="password" 
            required/>
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
