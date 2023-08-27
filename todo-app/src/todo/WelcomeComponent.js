import React, { useState } from "react";
import { retriveHelloeWorldPathVariable } from "./api/HelloWorldAPIService";

export default function WelcomeComponent() {
  const [message, setMessage] = useState(null);

  const callHelloWorldApi = () => {
    retriveHelloeWorldPathVariable("hemant")
      .then((response) => successRespone(response))
      .catch((error) => errorRespone(error))
      .finally(() => console.log("cleanup"));
  };

  const successRespone = (response) => {
    setMessage(response.data.message);
    console.log(response);
  };

  const errorRespone = (error) => {
    console.log(error);
  };
  return (
    <>
      <h1>Welcpme to React programming</h1>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorldApi}>
          Call hello world
        </button>
        <div className="text-info">{message}</div>
      </div>
    </>
  );
}
