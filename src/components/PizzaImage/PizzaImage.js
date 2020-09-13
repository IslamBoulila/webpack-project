import React from 'react';
import styles from './PizzaImage.css';
import pizzaImage from '../../assets/pizza.png';

const PizzaImage = () =>{

   
        <div className={styles.pizzaImage} >
            <img src= {pizzaImage} className={styles.pizzaImg} />
        </div>
  


}
 export default PizzaImage;