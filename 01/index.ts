const fs = require('fs')

function lerArquivo(): string {
  const arquivoSelecionado = fs.readFileSync('./bd.json').toString();
  return arquivoSelecionado;
}

console.log(lerArquivo());

function escrever(palavra: string) {
  const arquivoSelecionado = lerArquivo();

  const arquivoConvertido: string[] = JSON.parse(arquivoSelecionado);

  arquivoConvertido.push(palavra);

  const json = JSON.stringify(arquivoConvertido);

  fs.writeFileSync('./bd.json', json);
}

console.log(escrever("Maçã"));