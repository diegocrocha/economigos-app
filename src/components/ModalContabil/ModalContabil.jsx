import React from 'react'
import * as G from '../../styles/globalComponents'
import Input from '../Form/Input/Input'

export default function ModalContabil({modal, setModal}) {


  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) {
        setModal(false);
    }
  }

    return (
      <>
        {modal &&
        <G.WrapperModal>
          <G.Modal>
            <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
            <div style={{width: "100%", height: "5rem", display: "flex"}}>
              <Input label="Valor*" value={null}/>
              <Input label="Data" value={null}/>
            </div>
            <Input label="Descrição" value={null}/>
            <div style={{width: "100%", height: "5rem", display: "flex"}}>
              <Input label="Conta" value={null}/>
              <Input label="Categoria" value={null}/>
            </div>
            <G.Button color="rgb(50, 162, 135)">Adicionar</G.Button>
          </G.Modal>
        </G.WrapperModal>}
      </>
    )
}
