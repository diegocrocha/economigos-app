import React from 'react'
import * as S from './style'
import moedaGasto from '../../assets/moeda-gasto.svg'
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria"
import GroupPieChart from "../../components/Charts/GroupPieChart";
import GreyPig from '../GreyPig/GreyPig';

export default function GastosPorCategoria({ dataCategorias, vazio }) {
    const [maiorCategoria, setMaiorCategoria] = React.useState(null)
    const [meioCategoria, setMeioCategoria] = React.useState(null)
    const [menorCategoria, setMenorCategoria] = React.useState(null)

    React.useEffect(() => {
        if (!vazio) {
            setMaiorCategoria(dataCategorias[0])
            setMeioCategoria(dataCategorias[1])
            setMenorCategoria(dataCategorias[2])
        }
    }, [])

    return (
        <S.GastosPorCategoria>
            <div className="tituloGasto">
                <img src={moedaGasto} alt="" />
                <span>Gastos</span>
            </div>

            {vazio ?
                <GreyPig height="60" mensagem="Você não possui gastos" />
                :
                <>
                    <div className="listaDeCategorias">
                        <ul>
                            <ItemListaCategoria cor={"#A23232"} nomao={maiorCategoria.nome}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#4d1717"} nomao={meioCategoria.nome}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#270c0c"} nomao={menorCategoria.nome}></ItemListaCategoria>
                        </ul>
                    </div>
                    <div className="graficoDeCategorias">
                        <GroupPieChart maior={maiorCategoria} meio={meioCategoria} menor={menorCategoria} />
                    </div>
                </>
            }
        </S.GastosPorCategoria>
    )
}
