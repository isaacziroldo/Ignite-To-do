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
}


export function Task({id, title, isCompleted, checked, handleToggle}: TaskProps){
    const [isCheck, setIsCheck] = useState(false);

    function handleClick()  {
    setIsCheck(!isCheck)
    handleToggle(id)
    }
    
    return (
        <div className={styles.task}   >

            <div onClick={() => handleClick()}> 
                {isCheck ? <BsCheckCircleFill className={styles.taskChecked}/> : <BsCircle className={styles.checkUnchecked}/>}
             </div>

            <span className={isCheck ? styles.textCheck : undefined} onClick={() => handleClick()}>{title}</span>
            <div>
            <Trash className={styles.trash} size={20}/>
            </div>
            
        </div>
    )
}