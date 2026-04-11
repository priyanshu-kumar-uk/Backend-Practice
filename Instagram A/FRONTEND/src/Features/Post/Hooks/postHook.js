import {getPost,createPost} from '../services/postApi.js'
import {setPost} from '../../../Redux/post.slice.js'
import {useDispatch} from 'react-redux'
export function posts(){

    let dispatch  = useDispatch()

   async function getPosts(){
         let data = await getPost()  // looks behav like return  Promise.resolve(data.postData)
        dispatch(setPost(data.postData))
    }

    async function createPosts({files,caption}) {
        let data = await createPost({files,caption})
        return data
    }


    return{
        getPosts,
        createPosts
    }
}