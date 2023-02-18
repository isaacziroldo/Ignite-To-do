
import styles from './App.module.css'
import { Header } from './components/Header'
import './Global.css'
import { Board } from './components/Board';




export function App() {


  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        
          <section className={styles.board}>
            
          <Board/>
        </section>
      </div>
    </div>
  )
}


