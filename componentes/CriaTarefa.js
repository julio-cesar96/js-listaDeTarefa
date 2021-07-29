import { carregaTarefa } from "./CarregaTarefa.js";
import BotaoConcluir from "./ConcluirTarefa.js";
import BotaoApagar from "./ApagarTarefa.js";


export const handleNovoItem = (evento) => {
    evento.preventDefault();
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const input = document.querySelector('[data-form-input]');
    const valorInput = input.value;
    
    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const horario = data.format('HH:mm');
    const dataFormatada = (data.format('DD/MM/YYYY'));
    const concluida = false;

    const dados = {
        valorInput,
        dataFormatada,
        horario,
        concluida
    };

    const tarefasAtualizadas = [...tarefas, dados];
    
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

    input.value = " ";

    carregaTarefa();
}

export const Tarefa = ({ valorInput, horario, concluida }, id) => {
    const tarefa = document.createElement('li');
    
    const conteudo = `<p class="content">${horario} * ${valorInput}</p>`;
    if (concluida) {
        tarefa.classList.add('done');
    }

    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir(carregaTarefa, id));
    tarefa.appendChild(BotaoApagar(carregaTarefa, id));

    return tarefa;
}
