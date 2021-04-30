import React from 'react'
import * as S from "./style";
import SaldoTotal from "../../components/SaldoTotal/SaldoTotal"
import GastosPorCategoria from "../../components/GastosPorCategoria/GastosPorCategoria"
import BalancoMensal from "../../components/BalancoMensal/BalancoMensal"
import { UserContext } from '../../hooks/UserContext'
import api from '../../services/api'


function Painel() {
  const { dados } = React.useContext(UserContext);
  const { saldo, setSaldo } = React.useState(null);

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
    <S.Painel className="animeRight">
      <SaldoTotal />
      <GastosPorCategoria />
      <BalancoMensal
        dataReceitas={[{ x: "Janeiro", y: 400 },
        { x: "Fevereiro", y: 120.0 },
        { x: "Março", y: 502.0 },
        { x: "Abril", y: 690.0 },
        { x: "Maio", y: 340.0 }]
        }
        dataGastos={[{ x: "Janeiro", y: 110.0 },
        { x: "Fevereiro", y: 240.0 },
        { x: "Março", y: 200.0 },
        { x: "Abril", y: 500.0 },
        { x: "Maio", y: 100.0 }]
        }
      />
    </S.Painel>
  )
}

export default Painel;