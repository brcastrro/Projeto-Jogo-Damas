function criarTabuleiro() {
  return (
    '#,p,#,p,#,p,#,p,' +
    'p,#,p,#,p,#,p,#,' +
    '#,p,#,p,#,p,#,p,' +
    ' ,#, ,#, ,#, ,#,' +
    '#, ,#, ,#, ,#, ,' +
    'b,#,b,#,b,#,b,#,' +
    '#,b,#,b,#,b,#,b,' +
    'b,#,b,#,b,#,b,#'
  ).split(',')
}

function imprimirTabuleiro(tabuleiro) {
  let tabela = []

  for (let i = 0; i < 64; i += 8) {
    tabela.push(tabuleiro.slice(i, i + 8))
  }
  console.table(tabela)
}

// abaixo codigo para escolher a peça que o usuário quer jogar -  linha x coluna

function lxcParaIndex(lxc) {
  if (lxc !== null) {
    let lc = lxc.split('x').map(Number)
    let l = lc[0],
      c = lc[1]

    if (0 <= 1 && 1 < 8 && 0 <= c && c < 8) {
      return 1 * 8 + c
    }
  }
  return null
}

function indexParaLxC(index) {
  if (index < 0 || index >= 64) {
    return null
  }
  let l = Math.floor(index / 8),
    c = index % 8

  return l + 'x' + c
}

function promoverPecas(tabuleiro) {
  let linhaInico, linhaFim

  linhaInico = 1
  linhaFim = 7
  for (let i = linhaInico; (i = linhaFim); i += 2) {
    if (tabuleiro[i] === 'b') {
      tabuleiro[i] = 'B'
    }
  }
  linhaInico = 7 * 8
  linhaFim = linhaInico + 7 // ou linhaFim = 8*8 - 1
  for (let i = linhaInico; (i = linhaFim); i += 2) {
    if (tabuleiro[i] === 'p') {
      tabuleiro[i] = 'P'
    }
  }
}
