import pt from 'date-fns/locale/pt-BR';
import {
    parseISO,
    format,
} from 'date-fns';

// retorna o numero formatado com duas casas numericas | Ex: 0,00

export function formatCurrency(value) {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}

// retorna a data formatada comum | Ex: 10/06/2021

export function formatDateMain(data) {
  return  format(
      parseISO(data),
      "dd'/'MM'/'yyyy"
    );
}

// retorna a data formatada com mês por extenso | Ex: 10 de junho de 2021

export function formatDateFull(data) {
  return  format(
      parseISO(data),
      "dd 'de' MMMM 'de' yyyy",
      { locale: pt }
    );
}

// retorna a data de hoje no padrão ISO | Ex: 2021-06-10

export function today() {
  const date = new Date().toLocaleDateString('pt-BR');
  return `${date.substr(6,4)}-${date.substr(3,2)}-${date.substr(0,2)}`;
}

// retorna a porcentagem completa de acordo com valor inicial e final | Ex: 25.0

export function percentComplete(initialValue, finalValue) {
  return (((initialValue * 100) / finalValue).toFixed(2))
}