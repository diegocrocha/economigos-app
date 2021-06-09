import React from 'react';
import * as S from "./style"

export const Select = ({options, label, value, setValue, className, type, setIsCredito, ...props}) => {
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
        case "BANKS":
          t = "apelido"
          break
        default:
          t = "name"
          break
      }
      let aux = []

      if (type == "BANKS") {
        options.map(op => {
          if(!('nome' in op)) {
            aux.push({
              value: op.id,
              name: op.apelido
            })
          } else {
            aux.push({
              value: op.id + "C",
              name: op.nome + " (Crédito)",
            })
          }
        })
      } else {
        options.map(op => {
          aux.push({
            value: op.id,
            name: op[t]
          })
        })
      }

      setOpt(aux)
    }
    if (options) {
      tratarJson()
    }
  }, [])

  function handleChange({target}) {
    if (type === "BANKS") {
      console.log("é gasto")
      if (target.value.indexOf("C") > -1) {
        console.log("é cartao")
        setIsCredito(true)
      } else {
        console.log("nao é cartao")
        setIsCredito(false)
      }
    }
    setValue(target.value)
  }

    return (
      <S.SelectContainer className={className}>
        <S.Select {...props} value={value} onChange={handleChange}>
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