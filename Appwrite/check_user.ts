import authService from "./auth";
export default async function checkUser() {
    try {
         const user = await authService.getCurrentUser();
         console.log(user);
         return user;
        
    } catch (error) {
        return null
    }
    return null;
}


