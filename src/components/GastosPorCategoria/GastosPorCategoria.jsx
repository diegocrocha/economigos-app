import React from 'react'
import * as S from './style'
import moedaGasto from '../../assets/moeda-gasto.svg'
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria"

export default function GastosPorCategoria() {
    return (
        <S.GastosPorCategoria>
            <div className="tituloGasto">
                <img src={moedaGasto} alt="" />
                <span>Gastos</span>
            </div>
            <div className="listaDeCategorias">
                <ul>
                    <ItemListaCategoria cor={"#0089A7"} nome={"Alimentação"}></ItemListaCategoria>
                    <ItemListaCategoria cor={"#005364"} nome={"Transporte"}></ItemListaCategoria>
                    <ItemListaCategoria cor={"#00313B"} nome={"Roupas"}></ItemListaCategoria>
                </ul>
            </div>
            <div className="graficoDeCategorias">
                
            </div>
        </S.GastosPorCategoria>
    )
}
