import React from 'react'
import SaldoTotal from "../../components/SaldoTotal/SaldoTotal"
import GastosPorCategoria from "../../components/GastosPorCategoria/GastosPorCategoria"
import BalancoMensal from "../../components/BalancoMensal/BalancoMensal"
import { UserContext } from '../../hooks/UserContext'
import api from '../../services/api'


function Painel() {
  const {dados} = React.useContext(UserContext);
  const {saldo, setSaldo} = React.useState(null);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     if (dados) {
  //       const response = await api.get(`/economigos/u/${dados.id}`);
  //       setData(await );
  //     }
  //   }
  //   fetchData();
  // }, [dados]);
  
  
  return (
    <>
        <SaldoTotal/>
        <GastosPorCategoria/>
        <BalancoMensal/>
    </>
  )
}

export default Painel;