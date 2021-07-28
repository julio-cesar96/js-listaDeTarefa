import { ordenaDatas, removeDatasDuplicadas } from "../service/data.js";
import { criaData } from "./CriaData.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-lista-tarefas]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = "";
    const datasUnicas = removeDatasDuplicadas(tarefasCadastradas);
    ordenaDatas(datasUnicas);
    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia));
    });
}