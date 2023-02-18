import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Board.module.css'
import { EmptyBoard } from './EmptyBoard'
import { NewTask } from './NewTask'
import { Task } from './Task'

interface Task {
    id: string,
    title: string,
    isCompleted: boolean
}


export function Board() {


    const [tasks, setTasks] = useState<Array <Task> >([
    ]
    )
    
    const [newTask, setNewTask] = useState<Task>({
        id: '',
        title: '',
        isCompleted: false,
    
      },)

    const [completedTasksCount, setCompletedTasksCount] = useState<number>(0)

    

    

   

    function CreateNewTask(event: FormEvent) {
      event.preventDefault()
      
      setTasks([...tasks, newTask])
        
      setNewTask({
        id: '',
        title: '',
        isCompleted: false,
      })
      
    }

      function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setNewTask({
          id: (tasks.length + 1).toString(),
          title: event.target.value,
          isCompleted: false,
        })
       
    }  

    const [checked, setChecked] = useState(false);

    const toggleTask = (id: string) => {
        setChecked(!checked);
        const updatedArray = tasks.map(item => {
          if(item.id === id) {

            item.isCompleted = !item.isCompleted

            return item
          } else {
            return item
          }
        })
        setTasks(updatedArray)
        const arrayCompleted = tasks.filter( item => item.isCompleted === true)
        setCompletedTasksCount(arrayCompleted.length)
        console.log(tasks)
      };
    

    

    return(

        
        <section>
          
            <div className={styles.wrapper}>
              <form onSubmit={CreateNewTask} className={styles.newTask}>
                <input 
                  type="text"
                  value={newTask.title}
                  placeholder='Adicione uma nova tarefa'
                  onChange={handleNewTaskChange}/>
                <button type='submit'>Criar</button>
              </form>

              <div className={styles.tasksCreatedAndCompleted}>
                    <div>
                      <strong>Tarefas Criadas </strong> <span>{tasks.length}</span>
                    </div>
                    <div>
                      <strong>Concluídas</strong> <span> {completedTasksCount} de {tasks.length}</span>
                    </div>
              </div>

            <section className={styles.createdTasks}>

              {tasks.length > 0 ?
              <div>
                {tasks.map(task => {
                  const value = task.id
                  return ( 
                    <Task
                        key = {value}
                        id = {task.id}  
                        title = {task.title}
                        isCompleted = {task.isCompleted}
                        checked={checked}
                        handleToggle={toggleTask}
                    />
                  )

                })}
                </div> :
                <EmptyBoard />

                  

            }
            </section>
          </div>
        </section>
    )
}