import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MenusApp from "../../components/MenusConjuntoApp/MenusApp";
import Contas from '../Contas'
import Painel from '../Painel'
import * as S from './style'

export default function Appi() {
    return (
        <S.Appi>
            <MenusApp />
            <Routes>
                <Route path="painel" element={<Painel />} />
                <Route path="contas" elesment={<Contas />} />
            </Routes>
        </S.Appi>
    )
}
