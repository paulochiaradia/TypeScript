"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sistema = void 0;
class Sistema {
    constructor() {
        this.bicicletas = [];
        this.pessoas = [];
        this.alugueis = [];
    }
    cadastroBike(novaBicicleta) {
        this.bicicletas.push(novaBicicleta);
    }
    cadastroPessoa(novaPessoa) {
        this.pessoas.push(novaPessoa);
    }
    cadastroAluguel(novoAluguel) {
        this.alugueis.push(novoAluguel);
    }
    pessoaPeloDocumento(documento) {
        const pessoa = this.pessoas.filter((element => element.documento == documento));
        return pessoa[0];
    }
    bikModelo(modelo) {
        const bicicleta = this.bicicletas.filter((element => element.modelo == modelo));
        return bicicleta[0];
    }
}
exports.Sistema = Sistema;
