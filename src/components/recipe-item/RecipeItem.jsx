import React from 'react';
import styles from "../recipe-item/RecipeItem.module.css"
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';


const RecipeItem = ({recipe}) => {

    const {favorites} = useFavorites()

    const {toggleFavorites} = useActions()

    const isExists = favorites.some(r => r.id  === recipe.id)

    console.log(favorites)
    return (
        <div className={styles.item}>
            <img src={recipe.image} alt={recipe.name} width={100}/>
            <h3>{recipe.name}</h3>
            <button onClick={()=> toggleFavorites(recipe)}>{isExists ? "Remove from" : "Add to"
            }</button>
        </div>
    );
};

export default RecipeItem;