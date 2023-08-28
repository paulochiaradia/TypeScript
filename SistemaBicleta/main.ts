import { Aluguel } from "./aluguel";
import { Bicicleta } from "./bicicleta"
import { Pessoa } from "./pessoa"
import { Sistema } from "./sistema";

const sistema = new Sistema()

sistema.cadastroBike(new Bicicleta("Shimano", "Veloci", 29, "Branca"))
sistema.cadastroBike(new Bicicleta("KRW", "Spotlight", 26, "Preta"))
sistema.cadastroBike(new Bicicleta("GTS", "M1", 26, "Amarela"))

sistema.cadastroPessoa(new Pessoa("Marcelo",39047807296))
sistema.cadastroPessoa(new Pessoa("Alessandra",11104236998))
sistema.cadastroPessoa(new Pessoa("Asdrubal",25547103695))

sistema.cadastroAluguel(new Aluguel(
    sistema.bikModelo("M1"),
    sistema.pessoaPeloDocumento(11104236998),
    "2023/01/23",
    "2023-01-25",
    25
))

sistema.cadastroAluguel(new Aluguel(
    sistema.bikModelo("Spotlight"),
    sistema.pessoaPeloDocumento(39047807296),
    "2023/01/25",
    "2023-01-30",
    32
))

console.log(sistema.alugueis)

