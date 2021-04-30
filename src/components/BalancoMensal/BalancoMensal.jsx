import React from 'react'
import * as S from './style'
import barChart from "../../assets/bar-chart.svg"
import GroupBarChart from '../Charts/GroupBarChart'

export default function BalancoMensal({dataReceitas, dataGastos}) {
    return (
        <S.BalancoMensal>
            <div>
                <img src={barChart} alt=""/>
                <span className="titleChart">Balanço Mensal</span>
            </div>
            <ul>
                <S.DescricaoBalancoMensal cor={"#32A287"} nome={"Receitas"}/>
                <S.DescricaoBalancoMensal cor={"#A23232"} nome={"Gastos"}/>
            </ul>

            <div className="barChart">
                <GroupBarChart
                dataReceitas={dataReceitas}
                dataGastos={dataGastos}
                />
            </div>
        </S.BalancoMensal>
    )
}
