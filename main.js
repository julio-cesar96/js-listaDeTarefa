
import {handleNovoItem} from "./componentes/CriaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', handleNovoItem);