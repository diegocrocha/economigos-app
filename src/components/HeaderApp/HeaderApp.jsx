import React from 'react'
import Logo from '../../assets/logo-escuro.svg'
import PerfilIcon from '../../components/LogosSVGComponentes/PerfilIcon/PerfilIcon'
import Notificacoes from '../../components/LogosSVGComponentes/NotificationIcon/Notification'
import SearchPrincipal from '../../components/SearchPrincipal/SearchPrincipal';
import * as S from "./style";
import { NavLink } from 'react-router-dom';

export default function HeaderApp() {
    return (
        <S.HeaderApp>
            <S.AlinhamentoLogo>
                <S.HeaderAppImage src={Logo}/>
            </S.AlinhamentoLogo>
            <S.AlinhamentoSearch>
                <SearchPrincipal/>
            </S.AlinhamentoSearch>
            <S.AlinhamentoIcones>
                <Notificacoes />
                <NavLink to="/app/perfil">
                  <PerfilIcon/>
                </NavLink>
            </S.AlinhamentoIcones>
        </S.HeaderApp>
    )
}
