import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [updatename, setUpdatename] = useState(true)
  const [userdata, setuserdata] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setUserid] = useState('')

  async function getdata() {
    let getuser = await axios.get("http://localhost:3000/user");
    setuserdata(getuser.data.data);
  }

  async function createData(e) {
    e.preventDefault();

    if(userid){
        await axios.patch(`http://localhost:3000/user/${userid}`,{
          username,
          email
        })
        setUsername("");
        setEmail("");
        getdata();
        setUserid("")
        setUpdatename(true)

    }else{
    await axios.post("http://localhost:3000/user", {
      username,
      email,
    });
    getdata();
    setUsername("");
    setEmail("");
  }}

  async function deletes(id) {
    await axios.delete(`http://localhost:3000/user/${id}`);
    getdata();
  }

   function updates(elem){
     setUsername(elem.username)
     setEmail(elem.email)
     setUserid(elem._id)
     setUpdatename(false)
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="main">
      <div className="form">
        <form onSubmit={createData}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => {
              return setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            value={email}
            placeholder="Enter description"
          
            onChange={(e) => {
              return setEmail(e.target.value);
            }}
          />
          <button>{updatename?"create":"Update"}</button>
        </form>
      </div>
      <div className="notes">
        {userdata.map((elem) => {
        return  <div className="card" key={elem._id}>
            <h1>{elem.username}</h1>
            <p>{elem.email}</p>
            <button onClick={() =>deletes(elem._id)}>Delete</button>
            <button onClick={()=>updates(elem)}>Edit</button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default App;
