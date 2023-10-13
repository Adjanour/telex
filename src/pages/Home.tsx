import { auth } from "../config/firebase"
// Purpose: Home page component for the application.
export const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            {auth.currentUser && (
                <>
                <div>
                <p>Hello {auth.currentUser?.displayName}</p>
                </div>
                <button>Logout</button></>
               )}
            
        </div>
    )
}