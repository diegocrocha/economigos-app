import React from 'react'
import * as S from './style'
import moedaGasto from '../../assets/moeda-gasto.svg'
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria"
import GroupPieChart from "../../components/Charts/GroupPieChart";
import GreyPig from '../GreyPig/GreyPig';
import { formatCurrency } from '../../utils/utils';

export default function GastosPorCategoria({ dataCategorias, preenchido }) {
    const [maiorCategoria, setMaiorCategoria] = React.useState("")
    const [meioCategoria, setMeioCategoria] = React.useState("")
    const [menorCategoria, setMenorCategoria] = React.useState("")
    const [somas, setSomas] = React.useState(null)

    React.useEffect(() => {
        if (preenchido) {
            setMaiorCategoria(dataCategorias[0]);
            setMeioCategoria(dataCategorias[1]);
            setMenorCategoria(dataCategorias[2]);
            soma(dataCategorias);
        }

    }, [dataCategorias])

    function soma(dataCategorias) {
        let total = 0;
        for (let i = 0; i < dataCategorias.length; i++) {
            total += dataCategorias[i].soma;
        }
        console.log(total)
        setSomas(total)
    }

    return (
        <S.GastosPorCategoria>
            <div className="tituloGasto">
                <img src={moedaGasto} alt="" />
                <span>Gastos</span>
            </div>

            {preenchido && somas != 0 ?
                <>
                    <div className="listaDeCategorias">
                        <ul>
                            <ItemListaCategoria cor={"#A23232"} nome={maiorCategoria.nome}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#4d1717"} nome={meioCategoria.nome}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#270c0c"} nome={menorCategoria.nome}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#000"} nome={"Outros"}></ItemListaCategoria>
                        </ul>
                    </div>
                    <div className="graficoDeCategorias">
                        <div className="totalGastos">
                            <span>Gastos</span>
                            <span><span>R$</span>{formatCurrency(Number(somas))}</span>
                        </div>
                        <GroupPieChart maior={maiorCategoria} meio={meioCategoria} menor={menorCategoria} />
                    </div>
                </>
                :
                <GreyPig height="60" mensagem="Você não possui gastos" />
            }
        </S.GastosPorCategoria>
    )
}
