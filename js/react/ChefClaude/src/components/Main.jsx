import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const newIngredientInputRef = React.useRef(null)

    async function getRecipe() {
        setRecipe(await getRecipeFromMistral(ingredients))
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")?.trim() ?? "";

        if (
            newIngredient &&
            !ingredients.some(
                ing => ing.toLowerCase() === newIngredient.toLowerCase()
            )
        ) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);

            newIngredientInputRef?.current?.focus();
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
                    ref={newIngredientInputRef}
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />

                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0
                ? <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    onRemoveIngredient={handleRemoveIngredient}
                />
                : <p className="empty-ingredients-message">
                    No ingredients added yet. Add at least <bold>3</bold> above to get a recipe!
                </p>}

            {recipe ? <ClaudeRecipe recipe={recipe} /> : undefined}
        </main>
    )
}
