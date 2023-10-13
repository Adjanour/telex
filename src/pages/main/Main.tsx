import { auth } from "../../config/firebase"
import { getDocs, collection } from "firebase/firestore" 
import { db } from "../../config/firebase"
import { useEffect, useState } from "react"
import { Post } from "./Post"

export interface Post{
    id:string,
    userId:string,
    title:string,
    username:string,
    description:string
}

export const Main = () =>{
    const [postsList, setPostsList] = useState<Post[] | null>(null)
    const postsRef = collection(db,"post")

const getPosts = async() =>{
    const data = await getDocs(postsRef);
    setPostsList(data.docs.map((doc) => ({...doc.data(),id:doc.id})) as Post[]);
};
useEffect(() => {
    getPosts();
},[])
    return(    
        <div>
            <h1>Home Page</h1>
            {auth.currentUser && (
                <>
                <div>
                <h4>Hello Hello {auth.currentUser?.displayName}</h4>
                
                </div>
                <button className="btn btn-primary">Logout</button>
                <div>
                    {postsList?.map((post)=><Post post={post} />)}
                </div>
                </>
    
               )}
        </div>
    )
}