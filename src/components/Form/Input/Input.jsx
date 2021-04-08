import React from 'react'
import * as S from './style'

const Input = ({label, id, value, onChange, ...props}) => {
  return (
    <S.InputContainer>
      <S.Input 
        id={id}
        type="text" 
        value={value}
        onChange={onChange}
        {...props}/>
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.InputContainer>
  )
}

export default Input;
