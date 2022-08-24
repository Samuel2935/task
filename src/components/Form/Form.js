import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../api';
import axios from 'axios';

export default function Form() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    Follow_up: '',
    date: '',
    time: '',
    Samuel: ''  });

  useEffect(() => {
    axios.get(task).then((response) => {
      setTask(response.data).catch((err) => {
        console.log(JSON.parse(err));
        console.log(response.data);
      });
    });
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(task));
    console.log('hello world');
  };

  const clear = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <div className="reg">
        <form onSubmit={handleSubmit}>
          <div className="double">
            <div className="addput">
              <div className="taskme">
                Task {0}
                <button
                  style={{
                    backgroundColor: '#fff',
                    color: '#03A9F4',
                    width: '20%',
                    float: 'right',
                    margin: '0',
                    border:"1px solid #03A9F4"
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div>
            <p>Task Description</p>
          <input
              type="url text"
              
              placeholder="Follow_up"
              onChange={(e) => setTask({ ...task, Follow_up: e.target.value })}
             
            />
           
          </div>

          <div className="date_time">
            <div className="date">
              <p>Date</p>
              <input
                type="date"
                placeholder="date"
                onChange={(e) => setTask({ ...task, date: e.target.value })}
              />
            </div>

            <div className="time">
              <p>Time</p>
              <input
                type="time"
                placeholder="time"
                onChange={(e) => setTask({ ...task, time: e.target.value })}
              />
            </div>
          </div>

          <div>
            <p>Assign User</p>
            <select>
              <option>Samuel </option>
            </select>
         
          </div>

          <div className="btn">

{/*             
          <div className="btn3">
                  &#128465;
         </div> */}
     
            <div className="btn2">
              <button onClick={clear}
              style={{background:"#ccc", border:"1px solid #03A9F4", borderRadius:"10PX"}}
               >
                cancel
              </button>
            </div>
            <div className="btn1">
              <button
                onSubmit={handleSubmit}
                type="submit"
                style={{background:"#03A9F4", border:"none", borderRadius:"10PX"}}
              >
                save
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
