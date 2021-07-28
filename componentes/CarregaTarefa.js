import { criaData } from "./CriaData.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-lista-tarefas]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = "";
    tarefasCadastradas.forEach((tarefa) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');
        lista.appendChild(criaData(dia));
    });
}