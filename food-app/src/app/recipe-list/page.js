import ReciepeList from "@/components/ui/recipe-list";


async function fetchReciepeList(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();
        return data?.recipes;
    }catch(e){
        throw new Error(e);
    }
}
export default async function Reciepe(){
    const recipeList = await fetchReciepeList();
    return (
        <ReciepeList recipeList={recipeList}/>
    )
}