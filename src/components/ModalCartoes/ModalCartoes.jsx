import React from 'react'
import useForm from '../../hooks/useForm';
import * as G from '../../styles/globalComponents'
import Input from '../Form/Input/Input';

export default function ModalCartoes({modal, setModal}) {
  const limitCard = useForm()

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) {
        setModal(false);
    }
  }

  return (
    <>
      {modal &&
        <G.WrapperModal onClick={handleOutsideClick}>
          <G.Modal>
            <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
            <h1>Novo Cartão</h1>
            <form className="wrapperInputs">
              <div className="groupInputs">
                <Input
                  label="Limite"
                />
                <Input
                  label="Fatura atual"
                />
              </div>
              <div className="groupInputs">
                <Input
                  label="Vencimento"
                  type="date"/>
                <Input
                  label="Fechamento"
                  type="date" />
              </div>
              <div className="groupInputs">

              </div>
            </form>
          </G.Modal>
        </G.WrapperModal>
      }
    </>
  )
}
