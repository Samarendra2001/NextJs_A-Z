import ReciepeList from "@/components/ui/recipe-list";


const fetchRecipeList =async()=>{
    try{
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        return data?.recipes;
    }catch(err){
        throw new Error(err);
    }
}
export default async function Recipies(){
    const recipeList = await fetchRecipeList();

    return <ReciepeList recipeList= {recipeList} />;
}