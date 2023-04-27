import { Personagem } from "./modules/personagem.js"

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
personagemPedrinho.level = 5
personagemPedrinho.tipo = 'Mago'

console.log(personagemPedrinho)

const personagemJose = new Personagem()
personagemJose.nome = 'Jose'
personagemJose.tipo = 'Arqueiro'
personagemJose.level = 3


console.log('Insígnia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
console.log('Insígnia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())