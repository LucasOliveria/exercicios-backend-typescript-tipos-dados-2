import { lerArquivo } from "../01/index";
import { Usuario } from "../02/index";
const fs = require('fs');

function excluirUsuario(cpf: string): Usuario | string {
  const usuarios: Usuario[] = JSON.parse(lerArquivo());

  let acharUsuario = usuarios.findIndex((usuario) => usuario.cpf === cpf);
  let usuarioDeletado = usuarios.find((usuario) => usuario.cpf === cpf);

  if (acharUsuario === -1) {
    return "Usuário não encontrado"
  }

  usuarios.splice(acharUsuario, 1);

  fs.writeFileSync('./bd.json', JSON.stringify(usuarios));

  return usuarioDeletado as Usuario
}

console.log(excluirUsuario("047.888.999-99"));