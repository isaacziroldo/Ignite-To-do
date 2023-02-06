
import styles from './App.module.css'
import { Header } from './components/Header'
import './Global.css'
import { NewTask } from './components/NewTask';

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper} >
        <NewTask/>
        <section className={styles.board}>
          <strong>Tarefas Criadas <span>0</span></strong>
          <strong>Concluídas <span>0</span></strong>
          <section className={styles.createdTasks}>
            <span>Created Tasks</span>

          </section>
        </section>
      </div>
    </div>
  )
}

export default App
