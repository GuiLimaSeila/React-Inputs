"use client";

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import styles from './page.module.css';
import Carro from 'models/Carro';
import ListaCarros from 'models/ListaCarros';
import carros from 'data/carros';
import carro from 'data/carro';

export default function ClassObject(){

const carroObject = new Carro("Relampago Marquinhos", "ABC-1234", "Vermelho", 2006);
const listadeCarros = new ListaCarros();
listadeCarros.addCarro(carroObject);

carros.map((carro) => {
  listadeCarros.addCarro(new Carro(carro.id, carro.modelo, carro.placa, carro.cor, carro.ano));
});

  return(
<div className={styles.bckg}>
      <Header />


      <div className={styles.box}>
        <h3> Aula de Class e Object</h3>
        <h2>Lista Carro</h2>

          <div className={styles.tarefa}>
          <p>ID: {carro.id}</p>
          <p>Modelo: {carro.modelo}</p> 
          <p>Placa: {carro.placa}</p>
          <p>Cor: {carro.cor}</p>
          <p>Ano: {carro.ano}</p>
          </div>
        <h2>Lista Carros</h2>
        <div className={styles.tarefas}>
          {
            listadeCarros.carros.map((carro) => (
              <div key={carro.id} className={styles.tarefa}>
                <p>Modelo: {carro.modelo}</p>
                <p>Placa: {carro.placa}</p>
                <p>Cor: {carro.cor}</p>
                <p>Ano: {carro.ano}</p>
                </div>
            ))}
            
      </div>
      </div>

      <Footer />
    </div>
  )
}

