import { lerArquivo } from "../01/index";
import { Usuario } from "../02/index";
const fs = require('fs');

function filtrarUsuario(profissao: string): Usuario[] {
  const usuarios: Usuario[] = JSON.parse(lerArquivo());

  let usuariosFiltrados = usuarios.filter((usuario) => usuario.profissao === profissao);

  return usuariosFiltrados;
}

console.log(filtrarUsuario("Programador Frontend"));