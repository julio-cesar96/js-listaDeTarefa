
const apagarTarefa = (atualiza, id) => {
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefasCadastradas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    atualiza();
}

const BotaoApagar = (atualiza, id) => {
    const botaoApagar = document.createElement('button');

    botaoApagar.innerText = 'Apagar';

    botaoApagar.addEventListener('click', () => apagarTarefa(atualiza, id));

    return botaoApagar;
}


export default BotaoApagar