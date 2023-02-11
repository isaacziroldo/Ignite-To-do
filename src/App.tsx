
import styles from './App.module.css'
import { Header } from './components/Header'
import './Global.css'
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { EmptyBoard } from './components/EmptyBoard';
import { useState } from 'react';

const tasks = [
  {
    id: 1,
    title: "Fazer o desafio do ignite",
    isCompleted: false,

  },
  {
    id: 2,
    title: "Beber agua",
    isCompleted: false,

  },
  {
    id: 3,
    title: "Dar banho no cachorro",
    isCompleted: false,

  },
]

//const [tasksCount, setTasksCount] = useState()





export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper} >
        <NewTask/>
        <section className={styles.board}>
          <div className={styles.tasksCreatedAndCompleted}>
            <div>
            <strong>Tarefas Criadas </strong> <span>0</span>
            </div>
            <div>
            <strong>Concluídas</strong> <span> 0 de 0</span>
            </div>
          </div>
          <section className={styles.createdTasks}>


            {

                tasks.map(task => {
                  return (
                    <Task
                      key={task.id} 
                      title = {task.title}
                    />
                  )

                })  

            }
            
            

          </section>
        </section>
      </div>
    </div>
  )
}


