import styles from './Task.module.css'
import { Trash } from 'phosphor-react';


export function Task(props: {title:string}){
    return (
        <div className={styles.task}>
            
            <div className={styles.checkboxWrapper}>
                <input className={styles.checkMark} type="checkbox" name="mailing" id="task"/> 
                <label htmlFor="task"> </label>               
            </div>
               
            <p>{props.title}</p>
            <div>
            <Trash size={20}/>
            </div>
            
        </div>
    )
}