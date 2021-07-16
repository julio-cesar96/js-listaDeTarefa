const BotaoApagar = () => {
    const botaoApagar = document.createElement('button');

    botaoApagar.innerText = 'apagar';

    botaoApagar.addEventListener('click', apagarTarefa);

    return botaoApagar;
}

const apagarTarefa = (evento) => {
    const botaoApagar = evento.target;

    const tarefaApagada = botaoApagar.parentElement;

    tarefaApagada.remove();

    return botaoApagar;
}

export default BotaoApagar