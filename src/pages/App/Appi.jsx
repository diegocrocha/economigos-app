import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MenusApp from "../../components/MenusConjuntoApp/MenusApp";
import TelaCentralApp from '../../components/TelaCentralApp/TelaCentralApp';
import Contas from '../Contas'
import Painel from '../Painel'
import * as S from './style'

export default function Appi() {
    return (
        <S.Appi>
            <MenusApp />
            <TelaCentralApp>
            <Routes>
                <Route path="painel" element={<Painel />} />
                <Route path="contas" element={<Contas />} />
            </Routes>
            </TelaCentralApp>
        </S.Appi>
    )
}
