import { escreverArquivo, lerArquivo } from "../01/index";

export type Endereco = {
  cep: number
  rua: string
  complemento?: string
  bairro: string
  cidade: string
}

export type Usuario = {
  nome: string
  email: string
  cpf: string
  profissao?: string
  endereco?: Endereco | null
}

function cadastrarUsuario(usuario: Usuario): Usuario {

  if (!usuario.endereco) {
    usuario.endereco = null
  }

  escreverArquivo(usuario);

  return usuario;
}

function listarUsuario(): Usuario[] {
  const usuarios = lerArquivo();

  return JSON.parse(usuarios)
}

console.log(cadastrarUsuario({
  nome: "John Souza",
  email: "john@email.com ",
  cpf: "047.888.999-99",
  profissao: "Engenheiro",
  endereco: {
    cep: 7826547,
    rua: "Rua Dultra",
    bairro: "Sarolandia",
    cidade: "Sipe"
  }
}));

console.log(listarUsuario());

