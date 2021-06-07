import React from 'react';
import * as S from "./style"

export const Select = ({options, label, value, setValue, className, type, ...props}) => {
  const [opt, setOpt] = React.useState([])

  React.useEffect(() => {
    function tratarJson() {
      let t = ""
      switch (type) {
        case "CONTAS":
          t = "apelido"
          break
        case "CATEGORIAS":
          t = "categoria"
          break
        default:
          t = "name"
          break
      }
      let aux = []
      options.map(op => {
        aux.push({
          value: op.id,
          name: op[t]
        })
      })
      setOpt(aux)
    }
    if (options) {
      tratarJson()
    }
  }, [])

    return (
      <S.SelectContainer className={className}>
        <S.Select {...props} value={value} onChange={({target}) => setValue(target.value)}>
               <option value='' disabled>Selecione</option>
               {opt.length > 0 && opt.map(option =>
                    <option
                      key={option.value}
                      value={option.value}>{option.name}</option>
                )}
            </S.Select>
            <S.Label>
            {label}
        </S.Label>
      </S.SelectContainer>
    )
}