import { Post as IPost } from "./Main"
import { auth, db } from "../../config/firebase";
import { addDoc, collection,query, where,getDocs,deleteDoc ,doc} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
interface Props {
    post: IPost;
}

interface Like{
    userId: string;
}


export const Post = (props : Props) =>
{
    const {post} = props;
    const [user] = useAuthState(auth)
    const [like, setLike] = useState<Like[] | null >(null)



    const likesRef = collection(db,"likes")
    const likeDoc = query(likesRef, where("postId","==",post.id))
 
    const getLikes = async () =>{
       const data =  await getDocs(likeDoc)
       setLike(data.docs.map((doc) =>({
        userId: doc.data().userId
       })));
    }
    const addLike = async () =>{
        try{
           await addDoc(likesRef,{userId :user?.uid ,postId:post.id})
       if (user){
        setLike((prev) => prev ? [...prev,{userId:user?.uid }] : [{userId:user?.uid}])
       } 
        }
        catch(err){
            console.log(err);
        } 
    }
    const removeLike = async () =>{
        try{
            const likeToDeleteQuerry = query(
                likesRef,
                where("postId","==",post.id),
                where("userId","==",user?.uid)
            )
            const likeToDeleteData = await getDocs(likeToDeleteQuerry)

            const likeToDelete = doc(db,"likes",likeToDeleteData.docs[0].id)

            await deleteDoc(likeToDelete)

            if (user){
                setLike((prev) => prev ? [...prev.filter((prevs) => prevs.userId !== user?.uid)] : [{userId:user?.uid}])
            } 
        }
        catch(err){
                console.log(err);
        } 
    }

    const hasUserLiked = like?.find((like) => like.userId === user?.uid)

    useEffect(() =>{
        getLikes();
    },[])

    return(
        <div>
            <div className="title"><h1>{post.title}</h1></div>
            <div className="body">
                <p>{post.description}</p>
            </div>
            <div className="footer">
                <p>@{post.username}</p>
                <button onClick={ hasUserLiked ? removeLike : addLike} className="btn btn-secondary"> { hasUserLiked ? <>&#128078;</> : <> &#128077;</>}</button>
                { like && <p>{like.length} {like.length >1 ? "Likes" : "Like"}</p>}
            </div>
        </div>

    )
}