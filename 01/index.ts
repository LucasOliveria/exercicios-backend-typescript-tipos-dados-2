const fs = require('fs');
import { Usuario } from "../02/index";

export function lerArquivo(): string {
  const arquivoSelecionado = fs.readFileSync('./bd.json').toString();

  return arquivoSelecionado;
}

export function escreverArquivo(usuario: Usuario) {
  const arquivoSelecionado = lerArquivo();

  const arquivoConvertido: Usuario[] = JSON.parse(arquivoSelecionado);

  arquivoConvertido.push(usuario);

  const json = JSON.stringify(arquivoConvertido);

  fs.writeFileSync('./bd.json', json);
}