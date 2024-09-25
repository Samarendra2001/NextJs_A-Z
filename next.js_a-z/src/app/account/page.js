import { redirect } from "next/navigation";

export default function AccountPage(){
    //assume the profile has not been created so it will redirect to profile page
    const userProfile = null;
    //if(userProfile === null) redirect('profile')
    if(userProfile === null) redirect('products?search=product1&randomvalue=abcde')
    if(userProfile === null) redirect('cart?search=product1&randomvalue=abcde')
    return <div>
        <h1>This is Account page</h1>
    </div>
}