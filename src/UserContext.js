import React from 'react'
import api from './services/api'

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const userLogout = React.useCallback(async function userLogout() {
        setDados(false)
        setLogin(false)
        setError(null)
        setLoading(false)
    }, [])

    async function userLogin(email, password) {
        try {
            setError(null);
            setLoading(true);
            const userData = await api
                .post("economigos/sessao/login", {
                    email: email,
                    senha: password
                })
            if (userData.status !== 200) throw new Error('Email e/ou senha inválidos!')
            const {data} = userData;
            setDados(data);
            setLogin(true);
            console.log(data);
        } catch (err) {
            console.log(err)
            setError(err.message)
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <UserContext.Provider value={{userLogin, dados}}>
            {children}
        </UserContext.Provider>
    )
}
