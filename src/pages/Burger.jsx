import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from '../components/DragDrop';
import styles from '../styles/pages/burger.module.css';

const Burger = () => {
  return (
    <DndProvider backend={HTML5Backend}>
        <div className={styles.burger}>
            <DragDrop />
        </div>
        
    </DndProvider>
  );
};

export default Burger;