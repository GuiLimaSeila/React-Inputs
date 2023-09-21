

import Contador from './components/contador/Contador'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import styles from './page.module.css'

export default function Home() {

  return (
    <div className={styles.bckg}>
      <Header />

      <div className={styles.box}>
        <h3> Aula de React Estado</h3>
        <div className={styles.buttonarea}>
        <Contador 
        minino={0} 
        maximo={100} 
        agregacao={10}
        valorpadrao={0}
        />

        </div>

      </div>
      <Footer />
    </div>
  )
}
