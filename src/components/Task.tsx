import styles from './Task.module.css'
import { Trash } from 'phosphor-react';
import { useState } from 'react';
import {BsCheckCircleFill, BsCircle} from "react-icons/bs";

interface TaskProps {
    id: string,
    title: string,
    isCompleted: boolean
    checked: boolean
    handleToggle: (id:string) => void
    onDeleteTask: (id: string) => void
}


export function Task({id, title, handleToggle, onDeleteTask}: TaskProps){
    const [isCheck, setIsCheck] = useState(false);

    function handleClick()  {
    setIsCheck(!isCheck)
    handleToggle(id)
    }

    function handleDeleteTask() {
        onDeleteTask(id)
    }
    
    return (
        <div className={styles.task}   >

            <div onClick={() => handleClick()}> 
                {isCheck ? <BsCheckCircleFill className={styles.taskChecked}/> : <BsCircle className={styles.checkUnchecked}/>}
            </div>

            <span className={isCheck ? styles.textCheck : undefined} onClick={() => handleClick()}>{title}</span>
            <div className={styles.trash}>
            <Trash className={styles.trashIcon} size={20} onClick={handleDeleteTask}/>
            </div>
            
        </div>
    )
}