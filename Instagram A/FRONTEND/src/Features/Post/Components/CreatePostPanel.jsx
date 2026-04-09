import React from 'react'
import {useForm} from 'react-hook-form'
import { posts } from '../Hooks/postHook'
import { useNavigate} from 'react-router-dom'
const CreatePostPanel = () => {

const navigate =  useNavigate()

 let{register,handleSubmit,reset} = useForm()
 let{createPosts,getPosts}  = posts()
 
 async function formSubmit(data){
   await createPosts(data)
    getPosts()
    reset()
    navigate("/home")
 }
  return (
    <section className="insta-panel-card insta-create-card">
      <div className="insta-panel-heading">
        <h2>Create Post</h2>
        <p>Caption and media only</p>
      </div>

      <form className="insta-create-form" onSubmit={handleSubmit(formSubmit)}>
        <label>
          <span>Media</span>
          <div className="insta-upload-box">
            <input className="insta-file-input" type="file" accept="image/*,video/*" multiple {...register("files",{required:true})} />
            <div className="insta-upload-copy">
              <strong>Select image or video</strong>
              <p>Choose directly from computer or phone gallery</p>
            </div>
          </div>
        </label>

        <label>
          <span>Caption</span>
          <textarea rows="5" placeholder="Write caption..."  {...register("caption",{required:true})}/>
        </label>

        <button>Create Post</button>
      </form>
    </section>
  )
}

export default CreatePostPanel
