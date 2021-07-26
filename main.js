import BotaoConcluir from "./componentes/ConcluirTarefa.js";
import BotaoApagar from "./componentes/ApagarTarefa.js";

const NovoItem = (evento) => {
    evento.preventDefault();
    
    const lista = document.querySelector('[data-lista-tarefas]')
    const input = document.querySelector('[data-form-input]');
    const valorInput = input.value;
    
    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const dataFormatada = (data.format('DD/MM/YYYY'));

    const dados = {
        valorInput,
        dataFormatada
    };

    const criaTarefa =  criarTarefa(dados);
    
    lista.appendChild(criaTarefa);
    
    input.value = " ";
}

const criarTarefa = ({ valorInput, dataFormatada }) => {
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
        
    const conteudo = `<p class="content">${dataFormatada} * ${valorInput}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoApagar());

    return tarefa;
}

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', NovoItem);