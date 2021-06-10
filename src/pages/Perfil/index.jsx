import React from 'react'
import Head from '../../components/Helper/Head'
import PerfilIcon  from '../../components/LogosSVGComponentes/PerfilIcon/PerfilIcon'

export default function Perfil() {
  return (
    <div className="animeRight">
      <Head title="Perfil" />
      <div>
          <PerfilIcon />
      </div>
    </div>
  )
}
