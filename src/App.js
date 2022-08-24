import React, { useEffect } from "react";
import "./components/Form/Form.css";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import { getUser } from "./store/actions/authAction";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
     const userPayload = {
       email: "smithwills1989@gmail.com",
       password: "12345678",
     };
    dispatch(getUser(userPayload));

  }, []);


  return (
    <div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
