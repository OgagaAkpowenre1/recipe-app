import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe-item/recipe-item"

export default function Home(){
 const {loading, recipeList} = useContext(GlobalContext)

 if(loading) return <div>Loading recipes...</div>

 return (
  <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
     {recipeList && recipeList.length > 0 ?
      recipeList.map(item => <RecipeItem item={item}/>)
     : <div>
       <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
        Please search for a recipe of your choice.
       </p>
      </div>
      }
  </div>
 )
}