import styles from './NewTask.module.css'
import { useState } from 'react';

interface NewTaskProps {
    handleCreateNewTask: 
}

export function NewTask({handleCreateNewTask}: NewTaskProps) {

    

    return(
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button type='submit'>Criar</button>
        </form>
    )
}