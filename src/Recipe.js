import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {

  let counter = 0;

  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li key={counter++}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Number of calories: {Math.round(calories)}</p>
      <img className={style.image} src={image} alt={title}/>
    </div>
  );
}

export default Recipe;
