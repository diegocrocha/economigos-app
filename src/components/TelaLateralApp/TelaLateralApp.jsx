import React from 'react'
import * as S from './style'


export default function TelaLateralApp() {
    const [nav, setNav] = React.useState(true);


    function fecharTelaLateral() {
        if (!nav) {
            telaLateral.style.width = "0%";
            telaLateral.style.marginLeft = "-2%";
            setNav(true)
        }else{
            telaLateral.style.width = "19.5%";
            telaLateral.style.marginLeft = "0.5%";
            setNav(true)
        }
    }

    return (
        <>
            <S.TelaLateralApp id="telaLateral">
                <S.BtnFecharTela onClick={fecharTelaLateral}>

                </S.BtnFecharTela>
            </S.TelaLateralApp>
        </>
    )
}
