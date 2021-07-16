import BotaoConcluir from "./componentes/ConcluirTarefa.js";
import BotaoApagar from "./componentes/ApagarTarefa.js";
    
    const criarTarefa = (evento) => {
    
        evento.preventDefault();

        const lista = document.querySelector('[data-lista-tarefas]')
        const input = document.querySelector('[data-form-input]');
        const valorInput = input.value;

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        
        const conteudo = `<p class="content">${valorInput}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConcluir());
        tarefa.appendChild(BotaoApagar());
        lista.appendChild(tarefa);

        input.value = " ";
    }

    const novaTarefa = document.querySelector('[data-form-button]');
    novaTarefa.addEventListener('click', criarTarefa);