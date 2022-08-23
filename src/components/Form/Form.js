import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../api';
import axios from 'axios';

export default function Form() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    Task: '',
    Follow_up: '',
    date: '',
    time: '',
    Samuel_Ezeh: '',
  });

  useEffect(() => {
    axios.get(task).then((response) => {
      setTask(response.data).catch((err) => {
        console.log(JSON.parse(err));
      });
      console.log(response.data);
    });
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(task));
    console.log(task);
  };

  const clear = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <div className="reg">
        <form>
          <div className="double">
            <div className="addput">
              <input
                placeholder="Task"
                onChange={(e) => setTask({ ...task, Task: e.target.value })}
              />

              <div className="add">
                <button style={{ backgroundColor: '#fff', color: '#1da' }}>
                  +
                </button>
              </div>
            </div>
          </div>

          <div>
            <p>Task Description</p>
            <input
              placeholder="Follow_up"
              onChange={(e) => setTask({ ...task, Follow_up: e.target.value })}
            />
            <i></i>
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
                placeholder='time'
                onChange={(e) => setTask({ ...task, time: e.target.value })}
              />
            </div>
          </div>

          <div>
            <p>Assign User</p>
            <input
              type=""
              placeholder="Samuel_Ezeh"
              onChange={(e) => setTask({ ...task, Samuel_Ezeh: e.target.value })}
            />
          </div>

          <div className="btn">
            <div className="btn1">
              <button
                onSubmit={handleSubmit}
                type="submit"
                style={{ backgroundColor: 'green' }}
              >
                save
              </button>
            </div>
            <div className="btn2">
              <button onClick={clear} style={{ backgroundColor: 'red' }}>
                cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
