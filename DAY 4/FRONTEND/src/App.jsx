import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [title,setTitle] = useState('')
  const [decription,setDecription] = useState('')
  const [userid, setUserid] = useState('')

  
  let getdata = async () => {
    let data = await axios.get("http://localhost:3000/notes");
    setUserdata(data.data.data);
  };
async function submithandle(e){
  e.preventDefault()
     
  if(userid){
      axios.patch(`http://localhost:3000/notes/${userid}`,{
        title,
        decription,
      })
      
      getdata()
  }else{
     await axios.post("http://localhost:3000/notes",{ 
      title,
      decription,   
     })
     getdata()
     setTitle("")
     setDecription("")
    }
  }
 async function deletes (id){
   await axios.delete(`http://localhost:3000/notes/${id}`)
   getdata()
  }
  
 async function updates(elem){
     setTitle(elem.title)
     setDecription(elem.decription)
     setUserid(elem._id)
 }

  useEffect(() => {
    getdata();
  }, []); 

  return (
    <div className="main">
       <div className="form">
         <form onSubmit={submithandle}>
           <input type="text"value={title}  placeholder="Enter title"  onChange={(e)=>{
            return setTitle(e.target.value)
           }}/>
           <input type="text" value={decription} placeholder="Enter description" onChange={(e)=>{
            return setDecription(e.target.value)
           }}/>
           <button>Create</button>
         </form>
       </div>
      <div className="notes">
        {userdata.map((elem) => {
           return <div className="card" key={elem._id}>
            <h1>{elem.title}</h1>
            <p>{elem.decription}</p>
             <button onClick={()=>deletes(elem._id)}>Delete</button>
             <button onClick={()=>updates(elem)}>Update</button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default App;
