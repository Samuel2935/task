import React, { useEffect } from "react";
import "./components/Form/Form.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/actions/authAction";
import { getAssignedUser } from "./store/actions/assignedUserAction";
import Task from "./components/Task";


function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
     const userPayload = {
       email: "smithwills1989@gmail.com",
       password: "12345678",
     };

     if (user === null) {
       dispatch(getUser(userPayload));
     } else {
      const result = user.payload.results;
        dispatch(getAssignedUser(result));
     }
      

  }, [user]);

  return (
    <div>
      <div>
        <Task />
      </div>
    </div>
    
  );
}

export default App;
