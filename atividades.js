// EXERCICIO 1

const numero = document.querySelector('#numero');
const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

const quadrado = numero => parseInt(numero) ** 2;

// função para receber o valor digite na caixa de texto 
// e retornar para a div o quadrado do número
const resolverExercicio01 = () => {
    resultado.innerHTML = quadrado(numero.value);
}

// Executar a função resolverExercicio01 quando o botão
// for clicado.
calcular.addEventListener('click', resolverExercicio01);

// EXERCICIO 2

const exercicio2Numero1 = document.querySelector('#exercicio2Numero1');
const exercicio2Numero2 = document.querySelector('#exercicio2Numero2');
const calcular2 = document.querySelector('#exercicio2Calcular');
const resultado2 = document.querySelector('#resultadoExercicio2');

const maiorMenor = (numero1, numero2) => {
    if (parseInt(numero1) > parseInt(numero2)) {
        return numero1;
    } else {
        return numero2;
    }
}
const resolverExercicio02 = () => {
    resultado2.innerHTML = maiorMenor(exercicio2Numero1.value, exercicio2Numero2.value);
}

calcular2.addEventListener('click', resolverExercicio02);

// EXERCICIO 3
const nome = document.querySelector('#nome');
const sp = document.querySelector('#sp');
const rj = document.querySelector('#rj');
const es = document.querySelector('#es');
const mg = document.querySelector('#mg');
const button = document.querySelector('#exercicio3Button');
const resultado3 = document.querySelector('#resultadoExercicio3');

const estadoChecked = (sp, rj, es, mg) => {
    estado = null;
    if (sp.checked) {
        estado = "SP";
        return estado;
    }
    if (rj.checked) {
        estado = "RJ";
        return estado;
    }
    if (es.checked) {
        estado = "ES";
        return estado;
    }
    if (mg.checked) {
        estado = "MG";
        return estado;
    }
}

const mensagemFuncao = (nome) => {
    const mensagem = nome + " mora no estado de " + estadoChecked(sp, rj, es, mg);
    return mensagem;
}

const resolverExercicio03 = () => {
    resultado3.innerHTML = mensagemFuncao(nome.value);
}

button.addEventListener('click', resolverExercicio03);

// EXERCICIO 4
const nome2 = document.querySelector('#nome2');
const button2 = document.querySelector('#botao4');
const front = document.querySelector('#front');
const back = document.querySelector('#back');
const web = document.querySelector('#web');
const banco = document.querySelector('#banco');
const moveis = document.querySelector('#movel');
const resultado4 = document.querySelector('#resultado4');

const areasPreferenciais = (front, back, web, banco, moveis) => {
    let frontChecked = "";
    let backChecked = "";
    let webChecked = "";
    let bancoChecked = "";
    let moveisChecked = "";

    // Ternários
    frontChecked = front.checked ? frontChecked = "Front-end, " : frontChecked = "";
    backChecked = back.checked ? backChecked = "Back-end, " : backChecked = "";
    webChecked = web.checked ? webChecked = "Web-design, " : webChecked = "";
    bancoChecked = banco.checked ? bancoChecked = "Banco de dados, " : bancoChecked = "";
    moveisChecked = moveis.checked ? moveisChecked = "Programação móvel, " : moveisChecked = "";

    const area = frontChecked + backChecked + webChecked + bancoChecked + moveisChecked;
    return area;
}
const mensagemAreas = (nome) => {
    mensagem = areasPreferenciais(front, back, web, banco, moveis) + "são áreas de prefência de " + nome.value;
    return mensagem;
}

const resolverExercicio04 = () => {
    resultado4.innerHTML = mensagemAreas(nome2);
}

button2.addEventListener('click', resolverExercicio04);