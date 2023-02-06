
import styles from './App.module.css'
import { Header } from './components/Header'
import './Global.css'
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper} >
        <NewTask/>
        <section className={styles.board}>
          <div className={styles.tasksCreatedAndCompleted}>
            <strong>Tarefas Criadas <span>0</span></strong>
            <strong>Concluídas <span>0</span></strong>
          </div>
          <section className={styles.createdTasks}>
            
            <Task />
            <Task />

          </section>
        </section>
      </div>
    </div>
  )
}

export default App
