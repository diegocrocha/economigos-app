import React from 'react'
import * as S from './style'

const Input = ({primary, label, id, value, onChange, className, erro, ...props}) => {
  return (
    <>
    <S.InputContainer erro={erro} className={className} primary={primary}>
      <S.Input
        erro={erro}
        primary={primary}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        {...props}/>
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.InputContainer>
    {erro && <S.Error>{erro}</S.Error>}
    </>
  )
}

export default Input;
