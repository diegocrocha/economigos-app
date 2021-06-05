import React from 'react'
import * as G from '../../styles/globalComponents'

export default function ModalTelegram({modal, setModal}) {

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
          </G.Modal>
        </G.WrapperModal>
      }
    </>
  )
}
