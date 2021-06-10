import React from 'react'
import * as S from "./style";
import SaldoTotal from "../../components/SaldoTotal/SaldoTotal"
import GastosPorCategoria from "../../components/GastosPorCategoria/GastosPorCategoria"
import BalancoMensal from "../../components/BalancoMensal/BalancoMensal"
import { UserContext } from '../../hooks/UserContext'
import api from '../../services/api'
import Head from '../../components/Helper/Head';


function Painel() {
  const { dados } = React.useContext(UserContext);
  const [ saldo, setSaldo ] = React.useState(null);
  const [ categorias, setCategorias ] = React.useState([]);
  const [ mesesAnterioresReceitas, setMesesAnterioresReceitas ] = React.useState([]);
  const [ mesesAnterioresGastos, setMesesAnterioresGastos ] = React.useState([]);

  React.useEffect(() => {
    fetchDataDash()
    fetchSaldo()
    fetchGastos()
  }, [dados])

  async function fetchSaldo() {
    if (dados) {
      const response = await api.get(`economigos/usuarios/${dados.usuario.id}`)
      setSaldo(response.data.valorAtual)
    }
  }

  async function fetchGastos() {
    if (dados) {
      const response = await api.get(`/economigos/categorias/porcentagem-gastos?idUsuario=${dados.usuario.id}`)
      
      setCategorias(response.data)
    }
  }

  async function fetchDataDash() {
    if (dados) {
      const response = await api.get(`economigos/usuarios/${dados.usuario.id}/ultimos-meses`);

      let gastos = []
      let receitas = []

      for (let j = response.data[0].valorMensalDtos.length - 1; j >= 0; j--) {
        gastos.push({
          x: response.data[0].valorMensalDtos[j].mes,
          y: response.data[0].valorMensalDtos[j].valor
        })
      }
      for (let j = response.data[1].valorMensalDtos.length - 1; j >= 0; j--) {
        receitas.push({
          x: response.data[1].valorMensalDtos[j].mes,
          y: response.data[1].valorMensalDtos[j].valor
        })
      }

      setMesesAnterioresReceitas(receitas);
      setMesesAnterioresGastos(gastos);
    }
  }

  return (
    <S.Painel className="animeRight">
      <Head title="Painel" />
      <SaldoTotal  saldo={saldo}/>
      <GastosPorCategoria preenchido={categorias != null && categorias.length > 0 ? true : false} dataCategorias={categorias} />
      <BalancoMensal
        isEmpty={mesesAnterioresReceitas.length > 0
          && mesesAnterioresGastos.length > 0
          && mesesAnterioresReceitas.map(({y}) => Number(y)).reduce((a,b) => a + b) +
          mesesAnterioresGastos.map(({y}) => Number(y)).reduce((a,b) => a + b) == 0}
        dataReceitas={mesesAnterioresReceitas}
        dataGastos={mesesAnterioresGastos}
      />
    </S.Painel>
  )
}

export default Painel;