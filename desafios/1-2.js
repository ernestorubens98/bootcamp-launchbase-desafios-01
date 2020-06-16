// Construção e impressão de objetos
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`)


// Vetores e objetos
const dadosProgramadores = [
    {
        nome: 'Ernesto',
        idade: 22,
        tecnologias: {
            nome: 'Javascript',
            especialidade: ['Web', 'Mobile', 'Desktop']
        }
    },
    {
        nome: 'Carlos',
        idade: 32,
        tecnologias: {
            nome: 'C++',
            especialidade: ['Desktop']
        }
    }
]

console.log(`O usuario ${dadosProgramadores[1].nome} tem ${dadosProgramadores[1].idade} anos e usa a tecnologia ${dadosProgramadores[1].tecnologias.nome} com especialidade ${dadosProgramadores[1].tecnologias.especialidade}`)