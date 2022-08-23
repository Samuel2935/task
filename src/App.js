import React, { useEffect } from "react";

import "./components/Form/Form.css";
// import axios from 'axios';
import { useDispatch } from "react-redux";

import Form from "./components/Form/Form";
// import Posts from './components/Posts/Posts';
// import { getPosts } from './actions/posts';
// import { createPost } from './actions/posts';

function App({ task, setTask }) {
  const dispatch = useDispatch();
  useEffect(() => {
     const userPayload = {
       email: "smithwills1989@gmail.com",
       password: "12345678",
     };
    // dispatch();

  }, []);
 



  // let us try dispatching a create post too 🚀
  return (
    <div>
      <div></div>

      <div>
        <Form task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
