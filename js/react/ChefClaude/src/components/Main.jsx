import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const newIngredientInputRef = React.useRef(null)
    const recipeRef = React.useRef(null)

    async function getRecipe() {
        setRecipe(
            await getRecipeFromMistral(ingredients)
        )
    }
    React.useEffect(() => {
        recipeRef?.current?.scrollIntoView({behavior: "smooth"})
    }, [recipe])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")?.trim() ?? "";
        const isDuplicate = ingredients.some(
            ing => ing.toLowerCase() === newIngredient.toLowerCase()
        );

        if (newIngredient && !isDuplicate) {
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
                    No ingredients added yet. Add at least <b>3</b> above to get a recipe!
                </p>}

            {recipe ? <ClaudeRecipe ref={recipeRef} recipe={recipe} /> : undefined}
        </main>
    )
}
