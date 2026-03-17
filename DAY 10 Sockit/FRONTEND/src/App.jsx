import React from "react";
import {
  connectedSocket,
  reciveListner,
  sendListner,
} from "./service/apisocket.js";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [mes, setMes] = useState("");
  const [dataMes, setDataMes] = useState([]);

  function formSubmit(e) {
    e.preventDefault();
    setDataMes((prev) => [...prev, { message: mes, incoming: false }]); // Add a message in history
    sendListner("message", mes); //  from here to have gone message on backend
    setMes("")
  }

  useEffect(() => {
    connectedSocket(); // show a message in history

    reciveListner("message", (data) => {
      setDataMes((prev) => [...prev, { message: data, incoming: true }]);
    });
  }, []);

  return (
    <div className="main">
      <div className="message-data">
        <div className="top">
          <h4>Meta Chat</h4>
        </div>
        <div className="mid">
          {dataMes.map((elem) => {
            return <p className={elem.incoming?"p":"outcoming"}>{elem.message}</p>;
          })}
        </div>
        <div className="bottom">
          <form onSubmit={formSubmit}>
            <input
              value={mes}
              type="text"
              placeholder="Type message here"
              onChange={(e) => {
                setMes(e.target.value);
              }}
            />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
