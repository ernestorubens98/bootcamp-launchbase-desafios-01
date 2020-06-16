// Usuários e tecnologias
const usuarios0 = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for (let i = 0; i < usuarios0.length; i++) {
    console.log(`${usuarios0[i].nome} trabalha com ${usuarios0[i].tecnologias}`)
}

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if ((usuario.tecnologias[0] == 'CSS' || (usuario.tecnologias[1] == 'CSS'))) {
            return true
        } else {
            return false
        }
    }
}

for (let i = 0; i < usuarios0.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios0[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios0[i].nome} trabalha com CSS`);
    }
}


// Soma de despesas e receitas

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

for (let i = 0; i < usuarios.length; i++) {
    let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)

    if (saldo > 0) {
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`)
    }
}

function calculaSaldo(receitas, despesas) {
    return somaNumeros(receitas) - somaNumeros(despesas);
}

function somaNumeros(numeros) {
    let resultado = 0
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }
    return resultado;
}