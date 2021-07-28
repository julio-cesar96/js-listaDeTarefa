const concluirTarefa = ( atualiza, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida;

    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas));

    atualiza();
}

const BotaoConcluir = (atualiza, id) => {
    const botaoConcluir = document.createElement('button');
    
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'concluir';

    botaoConcluir.addEventListener('click', () => concluirTarefa(atualiza, id));

    return botaoConcluir;
}

export default BotaoConcluir