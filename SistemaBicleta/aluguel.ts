import { Bicicleta } from "./bicicleta";
import { Pessoa } from "./pessoa";

export class Aluguel{
    bicicleta:Bicicleta
    pessoa:Pessoa
    dataInicio:Date
    dataFinal:Date
    custoDia:number
    custoTotal:number
    constructor(bicicleta:Bicicleta, pessoa:Pessoa, inicio:string,final:string, custoDia:number){
        this.bicicleta=bicicleta
        this.pessoa=pessoa
        this.dataInicio= new Date(inicio)
        this.dataFinal= new Date(final)
        this.custoDia=custoDia
        this.custoTotal=custoDia*(this.dataInicio.getDay()-this.dataFinal.getDay())
        this.bicicleta.alugada=true
    }
}