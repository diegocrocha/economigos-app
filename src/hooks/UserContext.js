import React from 'react'
import api from '../services/api'
import { toast } from 'react-toastify';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const userLogout = React.useCallback(async function userLogout() {
        setDados(false)
        setLogin(null)
        setError(null)
        setLoading(false)
        window.localStorage.removeItem("autenticado")
        window.localStorage.removeItem('email')
        window.localStorage.removeItem('senha')
        window.localStorage.removeItem('token')
    }, [])

    async function userLogin(email, password) {
        try {
            setError(null);
            setLoading(true);
            const userData = await api
                .post("economigos/sessao/authenticate", {
                    email: email,
                    senha: password
                })
            if (userData.status !== 200) throw new Error('Email e/ou senha inválidos!')
            const { data } = userData;
            setDados(data);
            setLogin(true);
            localStorage.setItem("email", email);
            localStorage.setItem("senha", password);
            localStorage.setItem("token", data.jwt);
        } catch (err) {
            setError(err.message)
            setLogin(false);
            toast.error("E-mail e/ou senha inválida!")
        } finally {
            setLoading(false);
        }
    }

    function reload() {
      autoLogin()
    }

    async function autoLogin() {
      const email = window.localStorage.getItem('email');
      const senha = window.localStorage.getItem('senha');
      const token = window.localStorage.getItem('token');

      if (email && senha) {
          try {
              setError(null);
              setLoading(true);
              // const response = await user.get('/economigos/usuarios/this', {
              //      headers: {
              //          'Authorization': `Bearer ${token}`
              //      }
              //  })
              //  if (response.status !== 200) throw new Error('Token inválido');
              // getUser(email);
              userLogin(email,senha);
          } catch (error) {
              userLogout();
          } finally {
              setLoading(false);
          }
      } else {
          setLogin(null);
      }
  }

    React.useEffect(() => {
        autoLogin()
    }, [userLogout])

    return (
        <UserContext.Provider value={{ userLogin, userLogout, reload, dados, loading, login, error }}>
            {children}
        </UserContext.Provider>
    )
}
