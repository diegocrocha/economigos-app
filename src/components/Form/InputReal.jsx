import React from 'react'
import Input from './Input/Input'
import CurrencyFormat from 'react-currency-format';

export default function InputReal({primary, label, id, value, onChange}) {
  return (
    <CurrencyFormat  value={12312} customInput={<input value={1233123}/>}displayType={'text'} thousandSeparator={true} prefix={'R$'} />
  )
}
