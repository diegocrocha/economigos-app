import React from 'react'
import * as S from './style'
import moedaGasto from '../../assets/moeda-gasto.svg'
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria"
import GroupPieChart from "../../components/Charts/GroupPieChart";
import GreyPig from '../GreyPig/GreyPig';

export default function GastosPorCategoria({ dataCategorias, preenchido }) {
    const [maiorCategoria, setMaiorCategoria] = React.useState("")
    const [meioCategoria, setMeioCategoria] = React.useState("")
    const [menorCategoria, setMenorCategoria] = React.useState("")

    React.useEffect(() => {
        if (preenchido) {
            setMaiorCategoria(dataCategorias[0])
            setMeioCategoria(dataCategorias[1])
            setMenorCategoria(dataCategorias[2])
        }

    }, [dataCategorias])

    return (
        <S.GastosPorCategoria>
            <div className="tituloGasto">
                <img src={moedaGasto} alt="" />
                <span>Gastos</span>
            </div>

            {preenchido ?
                <>
                    <div className="listaDeCategorias">
                        <ul>
                            <ItemListaCategoria cor={"#A23232"} nomao={maiorCategoria.nome}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#4d1717"} nomao={meioCategoria.nome}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#270c0c"} nomao={menorCategoria.nome}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#000"} nomao={"Outros"}></ItemListaCategoria>
                        </ul>
                    </div>
                    <div className="graficoDeCategorias">
                        <GroupPieChart maior={maiorCategoria} meio={meioCategoria} menor={menorCategoria} />
                    </div>
                </>
                :
                <GreyPig height="60" mensagem="Você não possui gastos" />
            }
        </S.GastosPorCategoria>
    )
}
