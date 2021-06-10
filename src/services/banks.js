function generateImage(path) {
  const image = require(`../assets/${path}`)
  return image;
}

export function getBanks() {
  return [{
    id: 1,
    name: "Banco do Brasil",
    path: "banks/banco-do-brasil.svg"
  }, {
    id: 2,
    name: "Banco Inter",
    path: "banks/banco-inter.svg"
  }, {
    id: 3,
    name: "Banco PAN",
    path: "banks/banco-pan.svg"
  }, {
    id: 4,
    name: "BMG",
    path: "banks/bmg.svg"
  }, {
    id: 5,
    name: "Bradesco",
    path: "banks/bradesco.svg"
  }, {
    id: 6,
    name: "C6Bank",
    path: "banks/c6bank.svg"
  }, {
    id: 7,
    name: "Caixa",
    path: "banks/caixa.svg"
  }, {
    id: 8,
    name: "Itaú",
    path: "banks/itau.svg"
  }, {
    id: 9,
    name: "Next",
    path: "banks/next.svg"
  }, {
    id: 10,
    name: "Nubank",
    path: "banks/nubank.svg"
  }, {
    id: 11,
    name: "PicPay",
    path: "banks/picpay.svg"
  }, {
    id: 12,
    name: "Safra",
    path: "banks/safra.svg"
  }, {
    id: 13,
    name: "Santander",
    path: "banks/santander.svg"
  }, {
    id: 14,
    name: "Sicredi",
    path: "banks/sicredi.svg"
  }, {
    id: 15,
    name: "Outro",
    path: "banks/outros.svg"
  }, {
    id: 16,
    name: "Carteira",
    path: "banks/carteira.svg"
  }]
}

export function getBank(ida) {
  let c = getBanks()
  for(let i = 0; i < c.length; i++){
    if (c[i].id == ida) {
      let b = c[i]
      b.image = generateImage(b.path)
      return b
    }
  }
  return null
}