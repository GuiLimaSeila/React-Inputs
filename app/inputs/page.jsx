"use client";

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Texto from '../components/texto/Texto';
import styles from './page.module.css';
import { useState } from 'react';

export default function Inputs() {

  const [tarefa, setTarefa] = useState('');
  const [tarefasLista, setTarefasLista] = useState([]);
const vazio = ''

  const adicionar = () => {
    setTarefasLista([...tarefasLista, tarefa]);
    setTarefa(vazio)
  }

  return (
    <div className={styles.bckg}>
      <Header />
<div className={styles.box}> 
<h3> Aula de React Estado Utilisando Inputs</h3>

<div className={styles.inputarea}>

  <input 
  type="text" 
  placeholder="Digite nova tarefa" 
  className={styles.inputtext} 
  value={tarefa}
  onChange={(parametro) => setTarefa(parametro.target.value)}
  />

  <button className={styles.addbutton} onClick={adicionar}>Adicionar</button>
  </div>

  <div className={styles.tarefas}>
  {
    tarefasLista.map((tarefa, index) => (
        <div className={styles.tarefa} key={index}>
          <Texto index={index} texto={tarefa} />
        </div>
      )
    )}
  
  </div>
</div>
<Footer />
    </div>
  );
}
