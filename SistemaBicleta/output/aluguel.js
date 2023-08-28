"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluguel = void 0;
class Aluguel {
    constructor(bicicleta, pessoa, inicio, final, custoDia) {
        this.bicicleta = bicicleta;
        this.pessoa = pessoa;
        this.dataInicio = new Date(inicio);
        this.dataFinal = new Date(final);
        this.custoDia = custoDia;
        this.custoTotal = custoDia * (this.dataInicio.getDay() - this.dataFinal.getDay());
        this.bicicleta.alugada = true;
    }
}
exports.Aluguel = Aluguel;
