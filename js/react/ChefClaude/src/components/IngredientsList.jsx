export default function IngredientsList(props) {
    return (
        <section>
            <h2>Ingredients on hand:</h2>

            <ul className="ingredients-list" aria-live="polite">
                {props.ingredients.map((ingredient, index) => (
                    <li key={ingredient} className="ingredient-item">
                        <span>{ingredient}</span>
                        <button
                            onClick={() => props.onRemoveIngredient(index)}
                            className="remove-ingredient-btn"
                            aria-label={`Remove ${ingredient}`}
                        >
                            -
                        </button>
                    </li>
                ))}
            </ul>

            {props.ingredients.length >= 3 ? (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            ) : undefined}
        </section>
    );
}
