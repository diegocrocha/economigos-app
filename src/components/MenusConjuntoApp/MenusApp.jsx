import React from 'react'
import NavBarApp from '../NavBarApp/NavBarApp'
import HeaderApp from "../HeaderApp/HeaderApp";
import { UserContext } from '../../hooks/UserContext';
import api from '../../services/api';

export default function MenusApp() {

    const { dados } = React.useContext(UserContext)
    const [nome, setNome] = React.useState("")

    React.useEffect(() => {
        fetchNome()
    }, [dados])

    async function fetchNome() {
        if (dados) {
            const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
            setNome(await response.data.nome);
        }
    }

    return (
        <>
            <HeaderApp />
            <NavBarApp name={nome.split(" ")[0]} />
        </>
    )
}
