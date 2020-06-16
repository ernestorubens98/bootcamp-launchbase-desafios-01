// Cálculo de IMC
const nome0 = "Carlos";
const peso0 = 84;
const altura0 = 1.88;
const sexo0 = 'Masculino';

const imc = peso0 / (altura0 * altura0);

if (imc >= 30) {
    console.log(`${nome0} você está acima do peso`)
} else {
    console.log(`${nome0} você não está acima do peso`)
}


// Cálculo de aposentadoria
const nome1 = "Silvana";
const sexo1 = "F";
const idade1 = 75;
const contribuicao1 = 23;

if (sexo1 === 'F') {
    if (idade1 + contribuicao1 >= 85) {
        console.log(`${nome1}, você pode se aposentar!`);
    } else {
        console.log(`${nome1}, você ainda não pode se aposentar!`);
    }
} else if (sexo1 === 'M') {
    if (idade1 + contribuicao1 >= 95) {
        console.log('Ernesto, você pode se aposentar!');
    } else {
        console.log('Ernesto, você ainda não pode se aposentar!');
    }
} else {
    console.log('Sexo inválido!')
}