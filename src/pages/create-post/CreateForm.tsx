import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { addDoc,collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { auth } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect ,useRef} from 'react'


interface CreateFormData{
    title: string,
    description: string
}


export const CreateForm = () =>{

   
    const [user] = useAuthState(auth) 
    const schema = yup.object().shape({
        title:yup.string().required("You must add a title."),
        description:yup.string().required("You must description."), 
    })
    const {register,handleSubmit,formState:{errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db,"post")
    const onCreatePost = async (data:CreateFormData) =>{
       await addDoc (postsRef,{
        ...data,
        username: user?.displayName,
        userId: user?.uid,
       })
        console.log(data);
    }
    return(
        <div className='container mt-5'>
           <h3>
      <span >😀</span> Hi, Add a new post!
    </h3>
        <form className='form' onSubmit={ handleSubmit(onCreatePost)}>
            <div>
            <input className='form-control' type="text" placeholder='Title...' {...register("title")} />
            <p style={{color:"red"}}>{errors.title?.message}</p>
            </div>
            <div>
            <textarea className='form-control' cols={50} rows={10
             } placeholder='Description...' {...register("description")}/>
            <p style={{color:"red"}} >{errors.description?.message}</p>
            </div>
            <div>
            <input className='btn btn-primary' type="submit" />
            </div>
        </form>
        </div>
    )
}