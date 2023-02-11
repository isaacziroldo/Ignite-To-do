import styles from './EmptyBoard.module.css'

import { ClipboardText } from 'phosphor-react'

export function EmptyBoard() {
    return(
        <div className={styles.emptyBoard}>
            <div>
                <ClipboardText className={styles.clipboard} size={56}/>
            </div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}