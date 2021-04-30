import React from 'react'
import * as G from '../../styles/globalComponents'
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import ItemTab from '../../components/ItemTab/ItemTab';
import SetaProximo from "../../assets/seta-proximo.svg";

export default function Cartoes() {
    return (
        <>
            <G.GroupMenu>
                <G.ImgBtnAdicionar src={BotaoAdicionar} alt="" />
                <G.TabLayout id="TabLayout">
                    {/* {componente.map(comp => (
                        <ItemTab id={number++} active key={comp.id} nome={comp.nome} />
                    ))} */}
                    <ItemTab active nome={"nubank"} />
                    <ItemTab nome={"c6 Bank"} />
                    <ItemTab nome={"Itaú"} />
                    <ItemTab nome={"Inter"} />
                </G.TabLayout>
                <G.ImgBtnProximo src={SetaProximo} alt="" />
            </G.GroupMenu>
        </>
    )
}
