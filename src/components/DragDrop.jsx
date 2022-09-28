import React from 'react';
import Ingredient from './Ingredient';
import styles from '../styles/components/dragDrop.module.css';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';

const ingredientsList = [
    {
        id: 1,
        iname: 'Bun',
        price: '20',
        url: 'https://cdn-icons-png.flaticon.com/512/751/751061.png',
    },
    {
        id: 2,
        iname: 'Lettuce',
        price: '15',
        url: 'https://cdn-icons-png.flaticon.com/512/6121/6121633.png',
    },
    {
        id: 3,
        iname: 'Patty',
        price: '100',
        url: 'https://cdn-icons-png.flaticon.com/512/4649/4649129.png',
    },
    {
        id: 4,
        iname: 'Cheese',
        price: '20',
        url: 'https://cdn-icons-png.flaticon.com/512/7219/7219954.png',
    },
];

const DragDrop = () => {
    const [burgerBuilder, setBurgerBuilder] = useState([]);

    const [{didDrop}, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item) => addIngredientToBurger(item.id),
        collect: (monitor) => ({
            didDrop: !!monitor.didDrop(),
        }),
    }));

    const addIngredientToBurger = (id) => {
        const burgerIngredients = ingredientsList.filter((picture) => id===picture.id);
        setBurgerBuilder((burgerBuilder) => [...burgerBuilder, burgerIngredients[0]]);
        console.log(didDrop);
    };

  return (
    <>
    <div className={styles.ingredients_container}>
        {ingredientsList.map((ingredient) => {
            return (
                <div className={styles.card} key={ingredient.id}>
                    <Ingredient url={ingredient.url} id={ingredient.id} />
                    <div className={styles.info}>
                        <h3>{ ingredient.iname }</h3>
                        <h2>{ ingredient.price }tk</h2>
                    </div>
                </div>
            );
        })}
    </div>
    <div className={styles.burger_container} ref={drop}>
        {burgerBuilder.map((ingredient) => {
            return <Ingredient key={ingredient.id} url={ingredient.url} id={ingredient.id} iname={ingredient.iname} />;
        })}
    </div>
    <Link
    to={{
        pathname: '/checkout',
        burgerBuilder
    }}
    >Check out</Link>
    </>
  );
};

export default DragDrop;