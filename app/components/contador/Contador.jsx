"use client";

import styles from './Contador.module.css'
import { useState } from 'react'

const Contador = ({ agregacao, minino, maximo, valorpadrao}) => {

    const [contador, setContador] = useState(valorpadrao);
  
    const adicionar = () => {
      setContador(contador < maximo ? contador + agregacao : maximo)
      console.log(contador);
    }
  
    const remover = () => {
      setContador(contador > minino ? contador - agregacao : minino)
      console.log(contador)
    }
  
    const resetar = () => {
      setContador(valorpadrao)
      console.log(contador)
    }
  
    return (
        <>
          <button onClick={adicionar} className={styles.addbutton}> Adicionar</button>
          <button onClick={remover} className={styles.deletebutton}> Remover</button>
            <button onClick={resetar} className={styles.resetbutton}> Resetar</button>
            <p>Contador: {contador}</p>
        </>
    )
}

export default Contador;