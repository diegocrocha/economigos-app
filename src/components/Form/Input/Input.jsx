import React from 'react'
import * as S from './style'

const Input = ({label, id, ...props}) => {
  return (
    <S.InputContainer>
      <S.Input id={id} name={id} type="text" required/>
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.InputContainer>
  )
}

export default Input;
