import React, { useContext, useEffect, useRef, useState } from "react";
import { createSong } from "../Service/songApi.js";
import { getsong } from "../Service/songApi.js";
import {getme} from '../Service/authApi.js'
   
const Dashbord = () => {
  const [showForm, setShowForm] = useState(false);
  const [songdata, setSongdata] = useState(null);
  const [songplay, setSongplay] = useState(null);
  const [user, setUser] = useState("")

  useEffect(()=>{
     async function routePro(){
       const response = await getme();
       setUser(response.decodeData.userType)
       }
      routePro()
  },[])

 

  let fileinput =  useRef(null)      
  
  async function songSubmit(e){
    e.preventDefault()
    const file = fileinput.current.files[0]
    await createSong({songFile: file})
  }
  
  async function songs() {
    let data = await getsong();
    setSongdata(data);
  }

  useEffect(() => {
    songs();
  }, []);

  return (
    <div className="dashbord">
      <div className="dash-top">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
            alt="spotify"
          />
        </div>

        <div className="search">
          <input type="search" placeholder="What do you want to play?" />
        </div>
       {
          user === "artist" && (
            <div className="upload-song" onClick={() => setShowForm(true)}>
            <i class="ri-upload-line"></i>
           </div>
          )
       }

        <div className="profile">P</div>
      </div>
      {showForm && (
        <div className="form-overlay">
          <div className="upload-form-box">
            <div className="form-top">
              <h2>Upload Song</h2>
              <button className="close-btn" onClick={() => setShowForm(false)}>
                X
              </button>
            </div>

              <form onSubmit={songSubmit}>
                    <div>
                        <label>
                            Select Audio File
                        </label>
                        <input 
                            ref={fileinput}
                            type="file" 
                            id="song"
                            name="song" 
                            required
                        />
                        
                    </div>
                    <button 
                        type="submit"
                    >
                        Upload Song
                    </button>
                </form>
          </div>
        </div>
      )}

      <div className="dash-mid">
        <section className="section">
          <div className="section-head">
            <h2>Popular albums and singles</h2>
            <span>Show all</span>
          </div>

          <div className="songs-row">
            {songdata &&
              songdata.map((v) => {
                return (
                  <div className="song-card" onClick={() => setSongplay(v)}>
                    <div className="song-image">
                      <img src={v.postUrl} alt="" />
                      <button className="play-btn">▶</button>
                    </div>
                    <h4>{v.artist}</h4>
                    <p>{v.title}</p>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
      {songplay && (
        <div className="dash-bottom">
          <div className="player-left">
            <img src={songplay && songplay.postUrl} alt="Tum Hi Ho" />
            <div className="player-song-info">
              <h4>{songplay && songplay.title}</h4>
              <p>{songplay && songplay.artist}</p>
            </div>
          </div>

          <div>
            <audio
              controls
              autoPlay
              src={songplay.url}
            >
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashbord;
