"use client";

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PopUp from '../components/popup/PopUp';
import Texto from '../components/texto/Texto';
import styles from './page.module.css';
import { useState } from 'react';

export default function Inputs() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popupmsg, setPopupmsg] = useState('');
  const [popuptype, setPopuptype] = useState('');

  const addTask = () => {
    if (task === '') {
      handleShowPopup('Por favor, digite uma tarefa!', 'error', 2000);
      return;
    } else {
      handleShowPopup('Sucesso, item adicionado!', 'sucess', 2000);
      setTaskList([...taskList, task]);
      setTask('');
    }
  }

  function handleShowPopup(msg, type, time) {
    setPopupmsg(msg);
    setPopuptype(type);
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, time);
  }

return (
<div className={styles.bckg}>
      <Header />
      {
        showPopUp && (
          <PopUp
            tipo={popuptype}
            msg={popupmsg}
          />
        )

      }

      <div className={styles.box}>
        <h3> Aula de React Estado Utilisando Inputs</h3>
        <input type="text" placeholder="Digite seu nome" className={styles.inputtext} value={task} onChange={(param) => setTask(param.target.value)} />
        <button onClick={addTask} className={styles.addbutton}>Mostrar PopUp</button>

        <div className={styles.tarefas}>
          
{
          popuptype === 'sucess' && (
            
            taskList.map((item, index) => (
              <Texto index={index} texto={item} />
            ))
          )
        }
        </div>

      </div>

      <Footer />
    </div>
);
        }
