import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
     const signUserOut = async() =>{
        await signOut(auth);
        navigate('/login')
     }
    
    return (
        <div className="navbar navbar-expand-lg " style={{display:"flex",justifyContent:"space-between",backgroundColor:"blue",color:"white"}}>
            <nav className="navbar-nav" style={{color:"white"}}>
                <Link to="/" style={{color:"white"}} className="nav-link">Home</Link>
                {!user ? <Link style={{color:"white"}} to="/login" className="nav-link">Login</Link> : <><Link style={{color:"white"}} to="/createpost" className="nav-link">Create Post</Link>  <button  onClick={signUserOut} style={{color:"white"}} className="nav-link">Signout</button> </>}
                
            </nav>
            {user && (
            <div className="ml-auto" style={{marginRight:"20px"}} >
                {auth.currentUser?.displayName} 
                <img style={{marginLeft:"10px"}} src={user?.photoURL || ""} className="rounded-circle" width="35" height="auto" alt="user" />
            </div>
            )}
        </div>
    );
};
