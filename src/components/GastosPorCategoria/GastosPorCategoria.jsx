import React from 'react'
import * as S from './style'
import moedaGasto from '../../assets/moeda-gasto.svg'
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria"
import GroupPieChart from "../../components/Charts/GroupPieChart";
import GreyPig from '../GreyPig/GreyPig';

export default function GastosPorCategoria({ dataCategorias, vazio }) {
    let maiorCategoria = dataCategorias,
        meioCategoria = dataCategorias,
        menorCategoria = dataCategorias;

        console.log("toaqui" + dataCategorias)

    return (
        <S.GastosPorCategoria>
            <div className="tituloGasto">
                <img src={moedaGasto} alt="" />
                <span>Gastos</span>
            </div>

            {vazio ?
                <GreyPig height="20px" mensagem="Voce nao tem gastos" />
                :
                <>
                    <div className="listaDeCategorias">
                        <ul>
                            {/* <ItemListaCategoria cor={"#A23232"} nome={maiorCategoria}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#4d1717"} nome={meioCategoria}></ItemListaCategoria>
                            <ItemListaCategoria cor={"#270c0c"} nome={menorCategoria}></ItemListaCategoria> */}
                        </ul>
                    </div>
                    <div className="graficoDeCategorias">
                        {/* <GroupPieChart maior={maiorCategoria} meio={meioCategoria} menor={menorCategoria} /> */}
                    </div>
                </>
            }
        </S.GastosPorCategoria>
    )
}
