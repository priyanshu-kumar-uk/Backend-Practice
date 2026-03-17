import { useContext } from "react";
import { AuthContext } from "../Context/Usercontext";
import {createSong} from '../Service/songApi.js'

export function useSong(){
   
let{songs,setSongs,currentsong,setCurrentsong} = useContext(AuthContext)


async function handlecreateSong(songFile) {
   let response =   await createSong(songFile)
   return response
}
}