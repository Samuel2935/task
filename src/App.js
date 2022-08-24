
import React, { useEffect,   } from 'react'
import './App.css';
import './components/Form/Form.css';
// import axios from 'axios';
import { useDispatch } from 'react-redux';




import Form from './components/Form/Form';
// import Posts from './components/Posts/Posts';
import { getPosts } from './actions/task';
import { createPost } from './actions/task';

function App({task, setTask}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(createPost());  
  }, [dispatch]);

  return (
    <div>
      
     
<div>

</div>
      
      <div>
        <Form task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
