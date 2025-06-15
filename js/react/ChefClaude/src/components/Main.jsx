import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        setRecipe(await getRecipeFromMistral(ingredients))
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        if (
            newIngredient &&
            !ingredients.some(
                ing => ing.trim().toLowerCase() === newIngredient.trim().toLowerCase()
            )
        ) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient.trim()]);
        }
    }

    function handleRemoveIngredient(indexToRemove) {
        setIngredients(prevIngredients =>
            prevIngredients.filter((_, index) => index !== indexToRemove)
        );
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 ? (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    onRemoveIngredient={handleRemoveIngredient}
                />
            ) : undefined}

            {recipe ? <ClaudeRecipe recipe={recipe} /> : undefined}
        </main>
    )
}
