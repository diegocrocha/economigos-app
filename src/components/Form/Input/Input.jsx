import React from 'react'
import * as S from './style'

export const Input = () => {
  return (
    <S.InputContainer>
      <S.Input type="text" required/>
      <S.Label htmlFor="">E-mail  ou telefone</S.Label>
    </S.InputContainer>
  )
}
