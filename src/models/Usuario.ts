export class Usuario {

  #nome: string;
  #idade: number;
  #senha: string;

  constructor(nome: string, idade: number, senha: string) {
    this.#nome = nome;
    this.#idade = idade;
    this.#senha = senha;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.#nome} e tenho ${this.#idade} anos.`;
  }

  verificarSenha(tentativa: string): boolean {
    return this.#senha === tentativa;
  }
}
