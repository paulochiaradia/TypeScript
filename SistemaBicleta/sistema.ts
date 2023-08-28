import { Aluguel } from "./aluguel";
import { Bicicleta } from "./bicicleta";
import { Pessoa } from "./pessoa";

export class Sistema{
    bicicletas: Bicicleta[] = []
    pessoas: Pessoa[] = []
    alugueis: Aluguel[] = []

  
    cadastroBike(novaBicicleta:Bicicleta){
        this.bicicletas.push(novaBicicleta)
    }

    cadastroPessoa(novaPessoa:Pessoa){
        this.pessoas.push(novaPessoa)
    }
    
    cadastroAluguel(novoAluguel:Aluguel){
        this.alugueis.push(novoAluguel)
    }

    pessoaPeloDocumento(documento:number){
       const pessoa = this.pessoas.filter((element=>element.documento==documento))
       return pessoa[0]
    }

    bikModelo(modelo:string){
       const bicicleta = this.bicicletas.filter((element=>element.modelo==modelo))
       return bicicleta[0]
    }



}