import { lerArquivo } from "../01/index";
import { Usuario } from "../02/index";
const fs = require('fs');

function atualizarUsuario(cpf: string, usuarioAtualizado: Usuario): Usuario | string {
  const usuarios: Usuario[] = JSON.parse(lerArquivo());

  let acharUsuario = usuarios.findIndex((usuario) => usuario.cpf === cpf);

  if (acharUsuario === -1) {
    return "Usuário não encontrado"
  }

  usuarios.splice(acharUsuario, 1, usuarioAtualizado);

  fs.writeFileSync('./bd.json', JSON.stringify(usuarios));

  /*   OU 
  
  let acharUsuario = usuarios.find((usuario) => usuario.cpf === cpf);

  if (!acharUsuario) {
    return "Usuário não encontrado"
  }

  Object.assign(acharUsuario, usuarioAtualizado);

  fs.writeFileSync('./bd.json', JSON.stringify(usuarios));

  */

  return usuarioAtualizado
}

function detalharUsuario(cpf: string): Usuario | string {
  const usuarios: Usuario[] = JSON.parse(lerArquivo());

  let acharUsuario = usuarios.find((usuario) => usuario.cpf === cpf);

  if (!acharUsuario) {
    return "Usuário não encontrado"
  }

  return acharUsuario as Usuario
}

const dadosDeAtualizacao: Usuario = {
  nome: 'Lucas Oliveira',
  email: 'lucas-dev@email.com ',
  cpf: '088.824.455-22',
  profissao: 'Programador FullStack',
  endereco: {
    cep: 50080500,
    rua: 'Rua das Silveiras',
    bairro: 'C',
    cidade: 'Olinda'
  }
}

console.log(atualizarUsuario("088.824.455-22", dadosDeAtualizacao));
console.log(detalharUsuario("088.824.455-22"));