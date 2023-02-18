
import styles from './App.module.css'
import { Header } from './components/Header'
import './Global.css'
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { EmptyBoard } from './components/EmptyBoard';
import { ChangeEvent, useState } from 'react';
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


