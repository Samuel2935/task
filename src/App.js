
import React, { useEffect,   } from 'react'
import './App.css';
import './components/Form/Form.css';
import Page from './Page';
import './page.css';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,

} from 'react-router-dom';




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


    // <Link  to="/">

    <Router>
    <div>
      
     
<div>

</div>
      
      <div>
        
<Routes>
      {/* <Form task={task} setTask={setTask}/> */}
      <Route path="/" element={<Page/>} />
      <Route path="/Form" element={<Form/>} />
      
      {/* <Page/> */}
 </Routes>     

     
      </div>
    </div>
    </Router>
  );
}

export default App;
